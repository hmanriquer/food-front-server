import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReceiptEntity } from './entities/receipt.entity';

@Controller('receipts')
@ApiTags('Receipts')
export class ReceiptsController {
  constructor(private readonly receiptsService: ReceiptsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new receipt' })
  @ApiCreatedResponse({
    description: 'The receipt has been successfully created.',
    type: ReceiptEntity,
  })
  create(@Body() createReceiptDto: CreateReceiptDto) {
    return this.receiptsService.create(createReceiptDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all receipts' })
  @ApiOkResponse({
    description: 'The receipts have been successfully retrieved.',
    type: ReceiptEntity,
  })
  findAll() {
    return this.receiptsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a receipt by id' })
  @ApiOkResponse({
    description: 'The receipt has been successfully retrieved.',
    type: ReceiptEntity,
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const receipt = await this.receiptsService.findOne(id);
    if (!receipt) throw new NotFoundException('Receipt not found');

    return receipt;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a receipt by id' })
  @ApiOkResponse({
    description: 'The receipt has been successfully updated.',
    type: ReceiptEntity,
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReceiptDto: UpdateReceiptDto,
  ) {
    const receipt = await this.receiptsService.update(id, updateReceiptDto);
    if (!receipt) throw new NotFoundException('Receipt not found');

    return receipt;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a receipt by id' })
  @ApiOkResponse({
    description: 'The receipt has been successfully deleted.',
    type: ReceiptEntity,
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const receipt = await this.receiptsService.remove(id);
    if (!receipt) throw new NotFoundException('Receipt not found');

    return receipt;
  }
}
