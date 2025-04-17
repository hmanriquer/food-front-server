import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'The id of the user',
    example: 1,
    required: true,
  })
  userId: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'The total price of the order',
    example: 100,
    required: true,
  })
  totalPrice: number;
}
