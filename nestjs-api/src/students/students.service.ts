import { randomUserName } from '@app/common/utils';
import { UsersService } from '@app/users/users.service';
import { Injectable } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { StudentModel } from './model/student.model';

@Injectable()
export class StudentsService {
  constructor(
    private readonly studentModel: StudentModel,
    private readonly usersService: UsersService,
  ) {}

  createStudent(body: StudentDto) {
    console.log(body, randomUserName());

    // const prePareRegData = {
    //   username: randomUserName(),

    //   password: '',

    //   role: '',

    //   isActive: true,

    //   createdAt: new Date(),

    //   updatedAt: new Date(),

    //   //   isDelete: false,
    // };

    // this.usersService.registerUser(prePareRegData);

    // return this.studentModel.save(body);
  }

  getAllStudent() {
    return this.studentModel.getStudentWithAgg();
  }
}
