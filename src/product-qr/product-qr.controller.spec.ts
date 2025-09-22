import { Test, TestingModule } from '@nestjs/testing';
import { ProductQrController } from './product-qr.controller';

describe('ProductQrController', () => {
  let controller: ProductQrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductQrController],
    }).compile();

    controller = module.get<ProductQrController>(ProductQrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
