import { Students, studentsSchema } from '@app/schemas';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModel } from './model/student.model';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Students.name, schema: studentsSchema },
    ]),
  ],
  providers: [StudentsService, StudentModel],
  controllers: [StudentsController],
})
export class StudentsModule {}
