import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly repository: Repository<Post>
  ) {}

  create(createPostDto: CreatePostDto) {
    const entity = new Post();
    entity.description = createPostDto.description;
    entity.date = createPostDto.date;
    entity.posted = false;
    // messages

    return this.repository.save(entity);
  }

  async findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const entity = new Post();
    entity.description = updatePostDto.description;
    entity.date = updatePostDto.date;
    entity.posted = false;
    // messages

    return this.repository.update(id, entity);
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
