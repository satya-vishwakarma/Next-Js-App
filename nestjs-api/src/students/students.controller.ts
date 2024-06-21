import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { StudentsService } from './students.service';

import { diskStorage } from 'multer';
import { extname } from 'path';
import { StudentDto, updateStatusDto } from './dto/student.dto';

import { objectIdDto } from '@app/common/dto/index.dto';
import { Request as ExpressRequest } from 'express';

// 2. Configure Multer
const storage = diskStorage({
  destination: './uploads', // Specify where to store uploaded files
  filename: (req, file, cb) => {
    const randomName = Array(32)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    return cb(null, `${randomName}${extname(file.originalname)}`);
  },
});

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', { storage }))
  createStudent(
    @Req() request: ExpressRequest,
    @UploadedFile() file: Express.Multer.File | any,
    @Body() body: StudentDto,
  ) {
    return this.studentService.createStudent({ body, files: file }, request);
  }

  @Get()
  getAllStudent() {
    return this.studentService.getAllStudent();
  }

  @Get(':id')
  getStudentInfo(@Param('id') id: objectIdDto) {
    return this.studentService.getStudentInfo(id);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string, @Req() request: ExpressRequest) {
    return this.studentService.deleteStudent(id, request);
  }

  @Put(':id')
  updateStudentStatus(
    @Param('id') id: objectIdDto,
    @Req() request: ExpressRequest,
    @Body() body: updateStatusDto,
  ) {
    return this.studentService.updateStudent(id, request, body);
  }
}
