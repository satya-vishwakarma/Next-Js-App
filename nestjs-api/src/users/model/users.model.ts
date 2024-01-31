import { BaseModel } from '@app/comman/model/baseModel.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Users } from '@app/schemas';

export class UserModel extends BaseModel {
  constructor(
    @InjectModel(Users.name)
    private userModel: Model<Users>,
  ) {
    super(userModel);
  }
}
