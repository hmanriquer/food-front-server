import { Module } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { OrderItemsController } from './order-items.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [OrderItemsController],
  providers: [OrderItemsService],
  imports: [PrismaModule],
})
export class OrderItemsModule {}
