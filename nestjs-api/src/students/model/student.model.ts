import { BaseModel } from '@app/common/model/baseModel.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Students } from '@app/schemas';

export class StudentModel extends BaseModel {
  constructor(
    @InjectModel(Students.name)
    private userModel: Model<Students>,
  ) {
    super(userModel);
  }
}
