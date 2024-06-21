import { GENDER } from '@app/common/enums';
import { IsIn, IsNotEmpty } from 'class-validator';

export class StudentDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  fatherName: string;

  @IsNotEmpty()
  motherName: string;

  @IsNotEmpty()
  class: string;

  @IsNotEmpty()
  dob: string;

  @IsNotEmpty()
  gender: GENDER;

  @IsNotEmpty()
  email: string;
}

export class updateStatusDto {
  @IsIn([1, 2])
  status: number;
}
