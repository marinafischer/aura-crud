import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CompanyModel as Company } from './company.model';
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
  companyId: Company['id'];
}
