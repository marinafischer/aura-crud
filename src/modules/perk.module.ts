import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerkController } from 'src/controllers/perk.controller';
import { PerkModel } from 'src/models/perk.model';

@Module({
  imports: [TypeOrmModule.forFeature([PerkModel])],
  controllers: [PerkController],
})
export class PerkModule {}
