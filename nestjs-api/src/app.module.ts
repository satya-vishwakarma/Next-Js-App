import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { config } from '@configs';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { StudentsModule } from '@app/students/students.module';
import { UsersModule } from '@app/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { ModulesModule } from './modules/modules.module';
import { excludeRoutes } from './routes/excludeRoutes';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      cache: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: `${configService.get<string>(
            'mongodb.database.connectionString',
          )}/${configService.get<string>('mongodb.database.databaseName')}`,
        };
      },
      inject: [ConfigService],
    }),
    UsersModule,
    StudentsModule,
    AuthModule,
    ModulesModule,
    TeachersModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    excludeRoutes(consumer);
  }
}
