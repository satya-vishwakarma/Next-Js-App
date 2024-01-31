import { Injectable } from '@nestjs/common';
import { UserModel } from './model/users.model';

@Injectable()
export class UsersService {
  constructor(private userModel: UserModel) {}

  getAllUser() {
    return this.userModel.find({});
  }
}
