import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { CollectionModel as Collection } from './collection.model';
import { PerkModel as Perk } from './perk.model';

@Entity()
export class CompanyModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  name: string;

  @Column({ length: 32 })
  descriptions: string;

  @Column({ length: 255 })
  img: string;

  @Column({ length: 40, unique: true })
  BCAdd: string;

  @Column({ length: 255 })
  cell: string;

  @Column({ length: 45, unique: true })
  cnpj: string;

  @Column({ length: 45 })
  cep: string;

  @Column({ length: 40 })
  complement: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Collection, (collection) => collection.company, {
    cascade: true,
  })
  collections: Collection[];

  @OneToMany(() => Perk, (perk) => perk.company, { cascade: true })
  perks: Perk[];

  // @ManyToMany(() => Collection, (Collection) => Collection.partners)
  // partners: Collection[];
}
