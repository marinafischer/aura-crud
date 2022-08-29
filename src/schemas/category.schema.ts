import { IsString, MaxLength } from 'class-validator';

export class CategorySchema {
  @IsString()
  @MaxLength(255)
  name: string;
}
