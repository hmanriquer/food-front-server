import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Username of the user',
    example: 'john_doe',
    required: true,
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Password of the user',
    example: 'password123',
    required: true,
  })
  password: string;
}
