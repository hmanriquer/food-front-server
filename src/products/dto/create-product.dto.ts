import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @ApiProperty({
    description: 'The name of the product',
    example: 'Product 1',
  })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'The ID of the category of the product',
    example: 1,
  })
  categoryId: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'The price of the product',
    example: 100,
  })
  price: number;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  @ApiProperty({
    description: 'The description of the product',
    example: 'This is a description of the product',
  })
  description: string | null;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'The status of the product',
    example: true,
    required: false,
    default: true,
  })
  isActive: boolean = true;
}
