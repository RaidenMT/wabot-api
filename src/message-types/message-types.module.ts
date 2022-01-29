import { Module } from '@nestjs/common';
import { MessageTypesService } from './message-types.service';
import { MessageTypesController } from './message-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageType } from './entities/message-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MessageType])],
  controllers: [MessageTypesController],
  providers: [MessageTypesService]
})
export class MessageTypesModule {}
