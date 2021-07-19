
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inputs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  value: number;


  @Column()
  category: string;

  @Column()
  output: boolean;

  @Column()
  date: string;

  @Column ()
  description: string

 

}
