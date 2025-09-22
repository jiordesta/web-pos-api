import { Test, TestingModule } from '@nestjs/testing';
import { StoreInventoryController } from './store-inventory.controller';

describe('StoreInventoryController', () => {
  let controller: StoreInventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreInventoryController],
    }).compile();

    controller = module.get<StoreInventoryController>(StoreInventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
