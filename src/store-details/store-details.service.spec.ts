import { Test, TestingModule } from '@nestjs/testing';
import { StoreDetailsService } from './store-details.service';

describe('StoreDetailsService', () => {
  let service: StoreDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreDetailsService],
    }).compile();

    service = module.get<StoreDetailsService>(StoreDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
