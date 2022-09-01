import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { PerkModel as Perk } from './perk.model';
import { CompanyModel as Company } from './company.model';
import { CollectionModel as Collection } from './collection.model';

@Entity()
export class ValidationModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nftId: number;

  @Column()
  userId: number;

  @CreateDateColumn()
  date: Date;

  @Column()
  status: number;

  @Column({ length: 45 })
  code: string;

  @ManyToOne(() => Perk, (perk) => perk.validations)
  perk: Perk['id'];

  @ManyToOne(() => Company, (company) => company.validations)
  company: Company['id'];

  @ManyToOne(() => Collection, (collection) => collection.validations)
  collection: Collection['id'];
}
