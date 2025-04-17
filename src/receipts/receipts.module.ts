import { Module } from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { ReceiptsController } from './receipts.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [ReceiptsController],
  providers: [ReceiptsService],
  imports: [PrismaModule],
})
export class ReceiptsModule {}
