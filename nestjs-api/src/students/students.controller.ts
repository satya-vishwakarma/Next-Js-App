import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Post()
  createStudent(@Body() body: StudentDto) {
    return this.studentService.createStudent(body);
  }

  @Get()
  getAllStudent() {
    return this.studentService.getAllStudent();
  }
}
