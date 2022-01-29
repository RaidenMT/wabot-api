import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageTypesService } from './message-types.service';
import { CreateMessageTypeDto } from './dto/create-message-type.dto';
import { UpdateMessageTypeDto } from './dto/update-message-type.dto';

@Controller('message-types')
export class MessageTypesController {
  constructor(private readonly messageTypesService: MessageTypesService) {}

  @Post()
  create(@Body() createMessageTypeDto: CreateMessageTypeDto) {
    return this.messageTypesService.create(createMessageTypeDto);
  }

  @Get()
  findAll() {
    return this.messageTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageTypeDto: UpdateMessageTypeDto) {
    return this.messageTypesService.update(+id, updateMessageTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageTypesService.remove(+id);
  }
}
