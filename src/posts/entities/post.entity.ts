import { Message } from "src/messages/entities/message.entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    date: string;

    @Column()
    posted: boolean;

    @OneToMany(() => Message, message => message.post)
    messages: Message[];
    
    @CreateDateColumn()
    createdOn: string;

    @UpdateDateColumn ()
    updatedOn: string;
}
