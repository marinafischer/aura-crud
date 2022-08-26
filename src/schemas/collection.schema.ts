import { IsString, MaxLength, IsNumber } from 'class-validator';

export class CollectionSchema {
  @IsString()
  @MaxLength(16)
  name: string;

  @IsString()
  @MaxLength(255)
  hash: string;

  @IsString()
  @MaxLength(32)
  description: string;

  @IsString()
  @MaxLength(32)
  imgProfile: string;

  @IsString()
  @MaxLength(32)
  imgCape: string;

  @IsNumber()
  companyId: number;
}
