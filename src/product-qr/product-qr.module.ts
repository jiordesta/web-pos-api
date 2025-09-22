import { Module } from '@nestjs/common';
import { ProductQrService } from './product-qr.service';

@Module({
  providers: [ProductQrService]
})
export class ProductQrModule {}
