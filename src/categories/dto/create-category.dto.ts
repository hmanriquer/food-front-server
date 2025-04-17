import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @ApiProperty({
    description: 'Name of the category',
    example: 'Postres',
  })
  name: string;

  @IsString()
  @MaxLength(255)
  @ApiProperty({
    description: 'Description of the category',
    example: 'Delicious desserts',
    required: false,
  })
  description: string | null;
}
