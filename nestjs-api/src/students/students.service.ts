import { Injectable } from '@nestjs/common';
import { StudentModel } from './model/student.model';

@Injectable()
export class StudentsService {
  constructor(private readonly studentModel: StudentModel) {}
  createStudent() {
    return this.studentModel.save({ firstName: 'sam' });
  }
}
