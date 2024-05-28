import { ROLES, STATUS } from '@app/common/enums';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UsersDocument = Users & Document;
@Schema({ collection: 'users' })
export class Users {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, default: ROLES.GUEST })
  role: string;

  @Prop({ required: true })
  profileImage: string;

  @Prop({ required: true, default: STATUS.INACTIVE })
  status: number;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;

  @Prop({ required: true, default: Date.now })
  updatedAt: Date;
}

export const usersSchema = SchemaFactory.createForClass(Users);
//usersSchema.index({ email: 1, username: 1 }, { unique: true });
//usersSchema.index({ email: 1 }, { unique: true });
