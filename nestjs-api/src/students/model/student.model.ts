import { BaseModel } from '@app/common/model/baseModel.model';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { STATUS } from '@app/common/enums';
import { Students } from '@app/schemas';

import { FilterQuery } from 'mongoose';
// Define interfaces for options
interface WhereOptions {
  // Define your specific filter fields here
}

interface ProjectionOptions {
  [key: string]: any; // Include any specific projection fields
}

// Define default values for optional parameters
const DEFAULT_LIMIT = 10;
const DEFAULT_SKIP = 0;
const DEFAULT_SORT_BY = 'asc';

interface AggregationOptions {
  pipeline: any[];
  where?: FilterQuery<any>;
  projection?: any;
  limit?: number;
  skip?: number;
  orderBy?: string;
  sortBy?: 'asc' | 'desc';
}

export class StudentModel extends BaseModel {
  constructor(
    @InjectModel(Students.name)
    private studentModel: Model<Students>,
  ) {
    super(studentModel);
  }

  async aggregateDocuments<T>(options: AggregationOptions): Promise<T[]> {
    const {
      pipeline,
      where = {},
      projection = {},
      limit = DEFAULT_LIMIT,
      skip = DEFAULT_SKIP,
      orderBy,
      sortBy = DEFAULT_SORT_BY,
    } = options;

    const filter: FilterQuery<T> = where;

    let aggregationPipeline: any = [{ $match: filter }];

    aggregationPipeline = aggregationPipeline.concat(pipeline);

    if (Object.keys(projection).length > 0) {
      aggregationPipeline.push({ $project: projection });
    }

    if (orderBy && sortBy) {
      const sortStage = {};
      sortStage[orderBy] = sortBy === 'asc' ? 1 : -1;
      aggregationPipeline.push({ $sort: sortStage });
    }

    aggregationPipeline.push({ $skip: skip });
    aggregationPipeline.push({ $limit: limit });

    return await this.studentModel.aggregate(aggregationPipeline);
  }

  getStudentWithAgg() {
    return this.studentModel.aggregate([
      {
        $match: { status: { $ne: 0 } },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'users',
          pipeline: [
            {
              $project: {
                'profileImage.profile': 1,
                status: 1,
              },
            },
          ],
        },
      },

      {
        $unwind: {
          path: '$users',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          statusLabel: {
            $switch: {
              branches: [
                {
                  case: { $eq: ['$status', STATUS.DELETE] },
                  then: 'Deleted',
                },
                {
                  case: { $eq: ['$status', STATUS.ACTIVE] },
                  then: 'Active',
                },

                {
                  case: { $eq: ['$status', STATUS.INACTIVE] },
                  then: 'InActive',
                },
              ],
              default: '',
            },
          },
        },
      },

      {
        $project: {
          profileImage: '$users.profileImage.profile',
          firstName: 1,
          lastName: 1,
          fatherName: 1,
          motherName: 1,
          class: 1,
          status: 1,
          dob: 1,
          gender: 1,
          createdBy: 1,
          userId: 1,
          createdAt: 1,
          updatedAt: 1,
          statusLabel: 1,
        },
      },
    ]);
  }

  getStudentWithConditonAggre(where) {
    return this.studentModel.aggregate([
      {
        $match: where,
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'users',
        },
      },
    ]);
  }
}
