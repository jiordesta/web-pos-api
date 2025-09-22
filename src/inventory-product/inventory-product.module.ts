import { Module } from '@nestjs/common';
import { InventoryProductService } from './inventory-product.service';

@Module({
  providers: [InventoryProductService]
})
export class InventoryProductModule {}
