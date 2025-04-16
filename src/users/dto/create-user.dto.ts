import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(255)
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
    required: false,
  })
  name: string | null;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(100)
  @ApiProperty({
    description: 'The username of the user',
    example: 'johndoe',
    required: true,
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(100)
  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
    required: true,
  })
  password: string;

  @IsEnum($Enums.Role)
  @IsOptional()
  @ApiProperty({
    description: 'The role of the user',
    example: $Enums.Role.SELLER,
    required: true,
    default: $Enums.Role.SELLER,
  })
  role: $Enums.Role = $Enums.Role.SELLER;
}
