import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { CompanyModel as Company } from './company.model';
import { CategoryModel as Category } from './category.model';
import { CollectionModel as Collection } from './collection.model';

@Entity()
export class PerkModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  name: string;

  @Column({ length: 255 })
  img: string;

  @Column({ length: 32 })
  description: string;

  @Column({ length: 255 })
  rules: string;

  @Column()
  periodicity: number;

  @Column()
  limit: number;

  @Column()
  expirationDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Company, (company) => company.perks)
  company: Company['id'];

  @ManyToOne(() => Category, (category) => category.perks)
  category: Category['id'];

  @ManyToOne(() => Collection, (collection) => collection.perks)
  collection: Collection['id'];
}
