import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateMessageTypeDto } from './dto/create-message-type.dto';
import { UpdateMessageTypeDto } from './dto/update-message-type.dto';
import { MessageType } from './entities/message-type.entity';

@Injectable()
export class MessageTypesService {
  constructor(
    @InjectRepository(MessageType) 
    private repository: Repository<MessageType>) {}

  create(createMessageTypeDto: CreateMessageTypeDto) {
    const entity = new MessageType();
    entity.description = createMessageTypeDto.description;

    return this.repository.save(entity);
  }

  async findAll() {
    return this.repository.find();

    // const list = await this.connection
    //   .getRepository(MessageType)
    //   .createQueryBuilder("messageType")
    //   .getMany();
    // return list;
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateMessageTypeDto: UpdateMessageTypeDto) {
    return this.repository.update(id, updateMessageTypeDto);
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
