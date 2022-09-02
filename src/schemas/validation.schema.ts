import { IsNumber, IsInt, IsDateString } from 'class-validator';

export class ValidationSchema {
  @IsNumber()
  @IsInt()
  nftId: number;

  @IsNumber()
  @IsInt()
  userId: number;

  @IsNumber()
  @IsInt()
  perk: number;

  @IsNumber()
  @IsInt()
  company: number;

  @IsNumber()
  @IsInt()
  collection: number;

  @IsDateString()
  date: Date;
}
