import { Injectable } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { StudentModel } from './model/student.model';

@Injectable()
export class StudentsService {
  constructor(private readonly studentModel: StudentModel) {}

  createStudent(body: StudentDto) {
    return this.studentModel.save(body);
  }

  getAllStudent() {
    return this.studentModel.getStudentWithAgg();
  }
}
