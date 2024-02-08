import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, usersSchema } from '../schemas';
import { UserModel } from './model/users.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: usersSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserModel],
  exports: [UsersService]
})
export class UsersModule { }
