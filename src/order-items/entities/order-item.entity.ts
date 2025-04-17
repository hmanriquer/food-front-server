import { ApiProperty } from '@nestjs/swagger';
import { OrderItem } from '@prisma/client';

export class OrderItemEntity implements OrderItem {
  @ApiProperty({
    description: 'The id of the order item',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The id of the order',
    example: 1,
  })
  orderId: number;

  @ApiProperty({
    description: 'The id of the product',
    example: 1,
  })
  productId: number;

  @ApiProperty({
    description: 'The quantity of the order item',
    example: 1,
  })
  quantity: number;

  @ApiProperty({
    description: 'The unit price of the order item',
    example: 100,
  })
  unitPrice: number;

  @ApiProperty({
    description: 'The total price of the order item',
    example: 100,
  })
  totalPrice: number | null;
}
