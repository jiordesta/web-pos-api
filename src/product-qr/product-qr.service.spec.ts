import { Test, TestingModule } from '@nestjs/testing';
import { ProductQrService } from './product-qr.service';

describe('ProductQrService', () => {
  let service: ProductQrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductQrService],
    }).compile();

    service = module.get<ProductQrService>(ProductQrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
