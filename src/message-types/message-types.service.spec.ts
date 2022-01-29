import { Test, TestingModule } from '@nestjs/testing';
import { MessageTypesService } from './message-types.service';

describe('MessageTypesService', () => {
  let service: MessageTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageTypesService],
    }).compile();

    service = module.get<MessageTypesService>(MessageTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
