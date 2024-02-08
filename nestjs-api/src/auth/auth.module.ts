import { jwtConstants } from '@app/common/constants/constants';
import { UsersModule } from '@app/users/users.module';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  providers: [AuthService, JwtService],
  controllers: [AuthController]
})
export class AuthModule { }
