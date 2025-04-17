import { Product } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ProductEntity implements Product {
  @ApiProperty({
    description: 'The id of the product',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The name of the product',
    example: 'Product 1',
  })
  name: string;

  @ApiProperty({
    description: 'The ID of the category of the product',
    example: 1,
  })
  categoryId: number;

  @ApiProperty({
    description: 'The price of the product',
    example: 100,
  })
  price: number;

  @ApiProperty({
    description: 'The description of the product',
    example: 'This is a description of the product',
  })
  description: string | null;

  @ApiProperty({
    description: 'The status of the product',
    example: true,
  })
  isActive: boolean;

  @ApiProperty({
    description: 'The date and time the product was created',
    example: '2021-01-01T00:00:00.000Z',
    readOnly: true,
    required: false,
    default: new Date(),
  })
  createdAt: Date = new Date();

  @ApiProperty({
    description: 'The date and time the product was updated',
    example: '2021-01-01T00:00:00.000Z',
    readOnly: true,
    required: false,
    default: new Date(),
  })
  updatedAt: Date = new Date();
}
