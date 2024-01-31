import { MongoExceptionFilter } from '@app/common/filters/mongo-exception.filter';
import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @UseFilters(MongoExceptionFilter)
  @Post()
  createStudent(@Body() body: StudentDto) {
    return this.studentService.createStudent(body);
  }
}
