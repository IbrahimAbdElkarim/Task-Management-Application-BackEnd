import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  password: string;
}
