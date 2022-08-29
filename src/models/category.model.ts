import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PerkModel as Perk } from './perk.model';

@Entity()
export class CategoryModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @OneToMany(() => Perk, (perk) => perk.categoryId)
  perks: Perk[];
}
