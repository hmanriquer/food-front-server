import { Order } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/users/entities/user.entity';
import { OrderItemEntity } from 'src/order-items/entities/order-item.entity';

export class OrderEntity implements Order {
  @ApiProperty({
    description: 'The id of the order',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The id of the user',
    example: 1,
  })
  userId: number;

  @ApiProperty({
    description: 'The total price of the order',
    example: 100,
  })
  totalPrice: number;

  @ApiProperty({
    description: 'The created at date of the order',
    example: new Date(),
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The updated at date of the order',
    example: new Date(),
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The user associated with the order',
    type: UserEntity,
  })
  user: UserEntity;

  @ApiProperty({
    description: 'The order items associated with the order',
    type: OrderItemEntity,
    isArray: true,
  })
  orderItems: OrderItemEntity[];
}
