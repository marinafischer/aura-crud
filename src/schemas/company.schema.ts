import { IsString, IsDate, MaxLength } from 'class-validator';

export class CompanySchema {
  @IsString()
  @MaxLength(16)
  name: string;

  @IsString()
  @MaxLength(32)
  descriptions: string;

  @IsString()
  @MaxLength(255)
  img: string;

  @IsString()
  @MaxLength(40)
  BCAdd: string;

  @IsString()
  @MaxLength(255)
  cell: string;

  @IsString()
  @MaxLength(45)
  cnpj: string;

  @IsString()
  @MaxLength(45)
  cep: string;

  @IsString()
  @MaxLength(40)
  complement: string;

  // @IsDate()
  // createdAt: Date;

  // @IsDate()
  // updatedAt: Date;
}
