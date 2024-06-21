import { ROLES, STATUS } from '@app/common/enums';
import { fileInterFace } from '@app/common/interfaces';
import { randomUserName } from '@app/common/utils';
import { UsersService } from '@app/users/users.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { StudentModel } from './model/student.model';

import * as fs from 'fs';

import { DATAIMAGEPREFIX } from '@app/common/constants/constants';
import { Types } from 'mongoose';
import { join } from 'path';

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
    const { fieldname, originalname, encoding, mimetype, filename, size } =
      files;

    const filePath = join(__dirname, './../../../', 'uploads', filename);

    const profileImageBase64 = `${DATAIMAGEPREFIX}${fs.readFileSync(filePath, 'base64')}`;

    const { userId: _id } = request['user'];

    const userId = new Types.ObjectId(_id);

    const prePareRegData = {
      username: randomUserName(),
      password: 'Test@123',
      role: [ROLES.STUDENT],
      createdAt: new Date(),
      updatedAt: new Date(),
      profileImage: {
        profile: profileImageBase64,
        fieldname,
        originalname,
        encoding,
        mimetype,
        filename,
        size,
      },
      status: STATUS.INACTIVE,
      email: body.email,
    };

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

  async getAllStudent() {
    return await this.studentModel.getStudentWithAgg();
  }

  async deleteStudent(id, request) {
    try {
      const { userId: _id } = request['user'];
      await this.studentModel.findByIdAndUpdate(id, {
        status: 0,
        updatedAt: new Date(),
        updatedBy: _id,
      });

      return 'Student deleted successfully.';
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async updateStudent(id, request, { status }) {
    try {
      const { userId: _id } = request['user'];
      await this.studentModel.findByIdAndUpdate(id, {
        status: status,
        updatedAt: new Date(),
        updatedBy: _id,
      });

      return 'Status updated  successfully.';
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async getStudentInfo(id) {
    try {
      return await this.studentModel.findById(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
