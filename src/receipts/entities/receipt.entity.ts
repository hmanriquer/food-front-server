import { ApiProperty } from '@nestjs/swagger';
import { Receipt } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';

export class ReceiptEntity implements Receipt {
  @ApiProperty({
    description: 'The id of the receipt',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'The receipt number',
    example: '1234567890',
  })
  receiptNumber: string;

  @ApiProperty({
    description: 'The id of the order',
    example: 1,
  })
  orderId: number;

  @ApiProperty({
    description: 'The date and time the receipt was printed',
    example: new Date(),
  })
  printedAt: Date | null;

  @ApiProperty({
    description: 'The data of the receipt',
    example: {
      attender: 'John Doe',
      total: 100,
      items: [
        {
          name: 'Item 1',
          price: 100,
          quantity: 1,
        },
        {
          name: 'Item 2',
          price: 200,
          quantity: 2,
        },
      ],
      paymentMethod: 'Cash',
      paymentDate: new Date(),
    },
  })
  printedData: JsonValue;
}
