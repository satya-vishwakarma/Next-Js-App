import { Users, usersSchema } from '@app/schemas';
import { UserModel } from '@app/users/model/users.model';
import { UsersService } from '@app/users/users.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherModel } from './models/teacher.model';
import { Teacher, TeacherSchema } from './schemas/teacher/teacher.schema';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Teacher.name, schema: TeacherSchema },
      { name: Users.name, schema: usersSchema },
    ]),
  ],
  controllers: [TeachersController],
  providers: [TeachersService, TeacherModel, UserModel, UsersService],
})
export class TeachersModule {}
