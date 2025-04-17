import { ApiProperty } from '@nestjs/swagger';
import { InputJsonValue } from '@prisma/client/runtime/library';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateReceiptDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'The id of the order',
    example: 1,
  })
  orderId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The receipt number',
    example: '1234567890',
  })
  receiptNumber: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The date and time the receipt was printed',
    example: new Date(),
  })
  printedAt: Date;

  @IsObject()
  @IsNotEmpty()
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
      ],
      paymentMethod: 'Cash',
      paymentDate: new Date(),
    },
  })
  printedData: InputJsonValue;
}
