import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageTypeDto } from './create-message-type.dto';

export class UpdateMessageTypeDto extends PartialType(CreateMessageTypeDto) {}
