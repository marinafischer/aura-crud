import {
  IsString,
  MaxLength,
  IsNumber,
  IsInt,
  IsDateString,
} from 'class-validator';

export class PerkSchema {
  @IsString()
  @MaxLength(16)
  name: string;

  @IsString()
  @MaxLength(255)
  img: string;

  @IsString()
  @MaxLength(32)
  description: string;

  @IsString()
  @MaxLength(255)
  rules: string;

  @IsNumber()
  @IsInt()
  periodicity: number;

  @IsNumber()
  @IsInt()
  limit: number;

  @IsDateString()
  expirationDate: Date;

  @IsNumber()
  companyId: number;

  @IsNumber()
  collectionId: number;

  @IsNumber()
  categoryId: number;
}
