import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class OrderItemsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createOrderItemDto: CreateOrderItemDto) {
    return this.prismaService.orderItem.create({
      data: createOrderItemDto,
    });
  }

  findByOrderId(orderId: number) {
    return this.prismaService.orderItem.findMany({
      where: { orderId },
    });
  }

  findOne(id: number) {
    return this.prismaService.orderItem.findUnique({
      where: { id },
    });
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return this.prismaService.orderItem.update({
      where: { id },
      data: updateOrderItemDto,
    });
  }

  remove(id: number) {
    return this.prismaService.orderItem.delete({
      where: { id },
    });
  }
}
