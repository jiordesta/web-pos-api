import { Test, TestingModule } from '@nestjs/testing';
import { StoreInventoryService } from './store-inventory.service';

describe('StoreInventoryService', () => {
  let service: StoreInventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreInventoryService],
    }).compile();

    service = module.get<StoreInventoryService>(StoreInventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
