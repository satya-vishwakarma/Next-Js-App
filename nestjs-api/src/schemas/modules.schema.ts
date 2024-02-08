import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ModulessDocument = Modules & Document;

import { Schema as MongooseSchema } from 'mongoose';

@Schema({ collection: 'modules' })
export class Modules {
  @Prop({ required: true, type: String })
  moduleName: string;

  @Prop({ required: false, type: String })
  description: string;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: true, default: Date.now })
  updatedAt: Date;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Users', default: null })
  createdBy: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Users', default: null })
  updatedBy: MongooseSchema.Types.ObjectId;
}

export const ModuleSchema = SchemaFactory.createForClass(Modules);
