import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'Name is required!' })
  @IsString({ message: 'Name must be a string!' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required!' })
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required!' })
  password: string;
}

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: 'Email is required!' })
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required!' })
  password: string;
}
