import { MessageType } from "src/message-types/entities/message-type.entity";
import { Post } from "src/posts/entities/post.entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    order: number;

    @OneToOne(() => MessageType)
    @JoinColumn()
    messageType: MessageType;

    @ManyToOne(() => Post)
    post: Post;

    @CreateDateColumn()
    createdOn: string;

    @UpdateDateColumn ()
    updatedOn: string;
}
