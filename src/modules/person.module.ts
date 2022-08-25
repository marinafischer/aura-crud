import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from 'src/controllers/person.controller';
import { PersonModel } from 'src/models/person.model';

@Module({
  // informar para o typeorm como ele deve tratar os modelos
  imports: [TypeOrmModule.forFeature([PersonModel])],
  controllers: [PersonController],
})
export class PersonModule { }
