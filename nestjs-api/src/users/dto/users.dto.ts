import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

import { ERRORMESSAGE } from '@app/common/constants';
import { ApiProperty } from '@nestjs/swagger';

const { PASSOWRDVALIDATION } = ERRORMESSAGE;

export class UserDto {
  @ApiProperty({ description: 'user name' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: 'Email' })
  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    description:
      'password should be minimum 8 characters at least one letter and one number',
    minimum: 1,
    maximum: 20,
  })
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  @MaxLength(20)
  @Matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
    message: PASSOWRDVALIDATION,
  })
  password: string;

  @IsOptional()
  status: number;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;

  @IsOptional()
  role: [];
}
