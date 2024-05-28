import { ROLES, STATUS } from '@app/common/enums';
import { fileInterFace } from '@app/common/interfaces';
import { randomUserName } from '@app/common/utils';
import { UsersService } from '@app/users/users.service';
import { Injectable } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { StudentModel } from './model/student.model';

import { Types } from 'mongoose';

@Injectable()
export class StudentsService {
  constructor(
    private readonly studentModel: StudentModel,
    private readonly usersService: UsersService,
  ) {}

  async createStudent(
    {
      body,
      files,
    }: {
      body: StudentDto;
      files: fileInterFace;
    },
    request,
  ) {
    const { filename } = files;

    const { userId: _id } = request['user'];

    const userId = new Types.ObjectId(_id);

    const prePareRegData = {
      username: randomUserName(),
      password: 'Test@123',
      role: [ROLES.STUDENT],
      createdAt: new Date(),
      updatedAt: new Date(),
      profileImage: filename,
      status: STATUS.INACTIVE,
      email: body.email,
    };

    console.log(prePareRegData, 'prePareRegData');

    const userInfo = await this.usersService.registerUser(prePareRegData);

    console.log(userInfo[0]._id, 'userInfo');
    return this.studentModel.save({
      ...body,
      ...{
        userId: userInfo[0]._id,
        createdBy: userId,
        updatedBy: userId,
      },
    });
  }

  getAllStudent() {
    return this.studentModel.getStudentWithAgg();
  }
}
