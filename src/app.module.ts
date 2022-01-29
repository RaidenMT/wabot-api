import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageTypesModule } from './message-types/message-types.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    PostsModule,
    // MongooseModule.forRoot('mongodb://localhost/wabot'),
    TypeOrmModule.forRoot(),
    MessageTypesModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
