import { Students, Users, studentsSchema, usersSchema } from '@app/schemas';
import { UserModel } from '@app/users/model/users.model';
import { UsersService } from '@app/users/users.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModel } from './model/student.model';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Students.name, schema: studentsSchema },
      { name: Users.name, schema: usersSchema }
    ]),
  ],
  providers: [StudentsService, StudentModel, UserModel, UsersService],
  controllers: [StudentsController],
})
export class StudentsModule { }
