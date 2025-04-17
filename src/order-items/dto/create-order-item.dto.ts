import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateOrderItemDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'The id of the product',
    example: 1,
    required: true,
  })
  productId: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'The id of the order',
    example: 1,
    required: true,
  })
  orderId: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'The quantity of the product',
    example: 1,
    required: true,
  })
  quantity: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'The unit price of the product',
    example: 100,
    required: true,
  })
  unitPrice: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'The total price of the product',
    example: 100,
    required: false,
  })
  totalPrice: number;
}
