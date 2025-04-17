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
import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OrderItemEntity } from './entities/order-item.entity';

@Controller('order-items')
@ApiTags('Order Items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new order item' })
  @ApiCreatedResponse({
    description: 'The order item has been successfully created.',
    type: OrderItemEntity,
  })
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get an order item by ID' })
  @ApiOkResponse({
    description: 'The order item has been successfully retrieved.',
    type: OrderItemEntity,
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const orderItem = await this.orderItemsService.findOne(id);
    if (!orderItem) throw new NotFoundException('Order item not found');

    return orderItem;
  }

  @Get('order/:orderId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all order items by order ID' })
  @ApiOkResponse({
    description: 'The order items have been successfully retrieved.',
  })
  findByOrderId(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.orderItemsService.findByOrderId(orderId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an order item by ID' })
  @ApiOkResponse({
    description: 'The order item has been successfully updated.',
    type: OrderItemEntity,
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderItemDto: UpdateOrderItemDto,
  ) {
    const orderItem = await this.orderItemsService.update(
      id,
      updateOrderItemDto,
    );
    if (!orderItem) throw new NotFoundException('Order item not found');

    return orderItem;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an order item by ID' })
  @ApiOkResponse({
    description: 'The order item has been successfully deleted.',
    type: OrderItemEntity,
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    const orderItem = await this.orderItemsService.remove(id);
    if (!orderItem) throw new NotFoundException('Order item not found');

    return orderItem;
  }
}
