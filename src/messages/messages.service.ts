import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly repository: Repository<Message>
  ) {}

  create(createMessageDto: CreateMessageDto) {
    const entity = new Message();
    entity.description = createMessageDto.description;
    entity.order = createMessageDto.order;
    // messageType
    // post

    return this.repository.save(entity);
  }

  async findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    const entity = new Message();
    entity.description = updateMessageDto.description;
    entity.order = updateMessageDto.order;
    // messageType
    // post

    return this.repository.update(id, entity);
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
