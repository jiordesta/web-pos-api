import { Module } from '@nestjs/common';
import { ProductDetailsController } from './product-details.controller';

@Module({
  controllers: [ProductDetailsController]
})
export class ProductDetailsModule {}
