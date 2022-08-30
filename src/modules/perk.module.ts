import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerkController } from 'src/controllers/perk.controller';
import { PerkModel } from 'src/models/perk.model';
import { PerkService } from 'src/services/perk.service';

@Module({
  imports: [TypeOrmModule.forFeature([PerkModel])],
  controllers: [PerkController],
  providers: [PerkService],
})
export class PerkModule {}
