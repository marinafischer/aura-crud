import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from 'src/controllers/person.controller';
import { PersonModel } from 'src/models/person.model';
import { PersonService } from 'src/services/person.service';

@Module({
  // informar para o typeorm como ele deve tratar os modelos
  imports: [TypeOrmModule.forFeature([PersonModel])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
