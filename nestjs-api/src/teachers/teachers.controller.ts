// src/teachers/teachers.controller.ts

import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';

import { Teacher } from './schemas/teacher/teacher.schema';
import { TeachersService } from './teachers.service';

import { Request as ExpressRequest } from 'express';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  async findAll(): Promise<Teacher[]> {
    return this.teachersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Teacher> {
    return this.teachersService.findOne(id);
  }

  @Post()
  async create(
    @Body() createTeacherDto: CreateTeacherDto,

    @Req() request: ExpressRequest,
  ): Promise<Teacher> {
    return this.teachersService.create(createTeacherDto, request);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTeacherDto: CreateTeacherDto,
  ): Promise<Teacher> {
    return this.teachersService.update(id, updateTeacherDto);
  }

  /*  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Teacher> {
    return this.teachersService.delete(id);
  } */
}
