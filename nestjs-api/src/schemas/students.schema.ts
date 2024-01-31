import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Status } from './../common/enums/global.enum';
export type StudentsDocument = Students & Document;

import { Schema as MongooseSchema } from 'mongoose';

@Schema({ collection: 'students' })
export class Students {
  @Prop({ required: true, type: String })
  firstName: string;

  @Prop({ required: true, type: String })
  lastName: string;

  @Prop({ required: true, type: String })
  fatherName: string;

  @Prop({ required: true, type: String })
  motherName: string;

  @Prop({ required: true, type: String })
  class: string;

  @Prop({ required: true, default: Status.INACTIVE })
  status: number;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: true, default: Date.now })
  updatedAt: Date;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Users', default: null })
  createdBy: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Users', default: null })
  updatedBy: MongooseSchema.Types.ObjectId;
}

export const studentsSchema = SchemaFactory.createForClass(Students);
