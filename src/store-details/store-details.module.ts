import { Module } from '@nestjs/common';
import { StoreDetailsService } from './store-details.service';
import { StoreDetailsController } from './store-details.controller';

@Module({
  providers: [StoreDetailsService],
  controllers: [StoreDetailsController]
})
export class StoreDetailsModule {}
