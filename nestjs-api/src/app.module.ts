import { config } from '@configs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal: true,
        load: [config],
        cache: true
      }
    ),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: `${configService.get<string>(
            'mongodb.database.connectionString',
          )}/${configService.get<string>('mongodb.database.databaseName')}`,
        }
      },
      inject: [ConfigService],
    }),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
