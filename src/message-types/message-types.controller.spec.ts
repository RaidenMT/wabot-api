import { Test, TestingModule } from '@nestjs/testing';
import { MessageTypesController } from './message-types.controller';
import { MessageTypesService } from './message-types.service';

describe('MessageTypesController', () => {
  let controller: MessageTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageTypesController],
      providers: [MessageTypesService],
    }).compile();

    controller = module.get<MessageTypesController>(MessageTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
