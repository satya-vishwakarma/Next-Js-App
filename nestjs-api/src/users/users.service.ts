import { UserModel } from '@app/users/model/users.model';
import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private userModel: UserModel) { }

  getAllUser() {
    return this.userModel.find({});
  }

  async registerUser({ username, password, email }: UserDto): Promise<object> {
    const hash = await bcrypt.hash(password, await bcrypt.genSalt());
    const prepareUserObj = {
      username,
      password: hash,
      email,
    };
    await this.userModel.save(prepareUserObj);
    return this.userModel.find(
      { email: email },
      { password: 0, isActive: 0, isDelete: 0, __v: 0 },
    );
  }

  findOne(condition) {
    return this.userModel.findOne(condition);
  }

  comparePassword({ requestPassword, hashPassword }) {
    return new Promise((resolve) => {
      return bcrypt.compare(requestPassword, hashPassword, function (err, res) {
        if (err) {
          resolve(false);
        }
        resolve(res);
      });
    });
  }
}
