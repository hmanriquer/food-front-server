import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';

export class CategoryEntity implements Category {
  @ApiProperty({
    description: 'Unique identifier for the category',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Name of the category',
    example: 'Postres',
  })
  name: string;

  @ApiProperty({
    description: 'Description of the category',
    example: 'Delicious desserts',
  })
  description: string | null;
}
