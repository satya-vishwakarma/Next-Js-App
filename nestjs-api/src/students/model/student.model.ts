import { BaseModel } from '@app/common/model/baseModel.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { STATUS } from '@app/common/enums';
import { Students } from '@app/schemas';

export class StudentModel extends BaseModel {
  constructor(
    @InjectModel(Students.name)
    private studentModel: Model<Students>,
  ) {
    super(studentModel);
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
}
