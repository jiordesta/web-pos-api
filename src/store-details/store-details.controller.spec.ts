import { Test, TestingModule } from '@nestjs/testing';
import { StoreDetailsController } from './store-details.controller';

describe('StoreDetailsController', () => {
  let controller: StoreDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreDetailsController],
    }).compile();

    controller = module.get<StoreDetailsController>(StoreDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
