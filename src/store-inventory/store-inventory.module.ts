import { Module } from '@nestjs/common';
import { StoreInventoryService } from './store-inventory.service';
import { StoreInventoryController } from './store-inventory.controller';

@Module({
  providers: [StoreInventoryService],
  controllers: [StoreInventoryController]
})
export class StoreInventoryModule {}
