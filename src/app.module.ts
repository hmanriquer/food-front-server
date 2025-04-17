import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { OrderItemsModule } from './order-items/order-items.module';

@Module({
  imports: [UsersModule, AuthModule, CategoriesModule, ProductsModule, OrderItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
