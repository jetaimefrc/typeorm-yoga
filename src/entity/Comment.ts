import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public content: string
}
