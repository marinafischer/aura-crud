import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { CompanyModel as Company } from './company.model';
import { PerkModel as Perk } from './perk.model';

@Entity()
export class CollectionModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  name: string;

  @Column({ length: 255 })
  hash: string;

  @Column({ length: 32 })
  description: string;

  @Column({ length: 32 })
  imgProfile: string;

  @Column({ length: 32 })
  imgCape: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Company, (company) => company.collections)
  company: Company['id'];

  @OneToMany(() => Perk, (perk) => perk.collection, { cascade: true })
  perks: Perk[];

  // @ManyToMany(() => Company, (company) => company.partners, {
  //   cascade: true,
  // })
  // @JoinTable()
  // partners: Company[];
}
