import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { StudentsService } from './students.service';

import { diskStorage } from 'multer';
import { extname } from 'path';
import { StudentDto } from './dto/student.dto';

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
    @UploadedFile() file: Express.Multer.File,
    @Body() body: StudentDto,
  ) {
    return this.studentService.createStudent({ body, files: file }, request);
  }

  @Get()
  getAllStudent() {
    return this.studentService.getAllStudent();
  }
}
