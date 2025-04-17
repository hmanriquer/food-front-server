import { Injectable } from '@nestjs/common';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ReceiptsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createReceiptDto: CreateReceiptDto) {
    return this.prismaService.receipt.create({
      data: createReceiptDto,
    });
  }

  findAll() {
    return this.prismaService.receipt.findMany();
  }

  findOne(id: number) {
    return this.prismaService.receipt.findUnique({
      where: { id },
    });
  }

  update(id: number, updateReceiptDto: UpdateReceiptDto) {
    return this.prismaService.receipt.update({
      where: { id },
      data: updateReceiptDto,
    });
  }

  remove(id: number) {
    return this.prismaService.receipt.delete({
      where: { id },
    });
  }
}
