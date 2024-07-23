import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TeacherDocument = Teacher & Document;

@Schema({ collection: 'teachers' })
export class Teacher {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  age: number;

  @Prop([String])
  subjects: string[];

  @Prop({ type: Types.ObjectId, ref: 'Users', default: null })
  createdBy: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Users', default: null })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Users', default: null })
  updatedBy: Types.ObjectId;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
