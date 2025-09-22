import { Test, TestingModule } from '@nestjs/testing';
import { InventoryProductController } from './inventory-product.controller';

describe('InventoryProductController', () => {
  let controller: InventoryProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryProductController],
    }).compile();

    controller = module.get<InventoryProductController>(InventoryProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
