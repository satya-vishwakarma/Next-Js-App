// src/models/teacher.model.ts

import { BaseModel } from '@app/common/model/baseModel.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher, TeacherDocument } from '../schemas/teacher/teacher.schema';

@Injectable()
export class TeacherModel extends BaseModel {
  constructor(
    @InjectModel(Teacher.name)
    private readonly teacherModel: Model<TeacherDocument>,
  ) {
    super(teacherModel);
  }

  // Add additional methods specific to TeacherModel here if needed
}
