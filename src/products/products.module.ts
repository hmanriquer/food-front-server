import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [PrismaModule],
})
export class ProductsModule {}
