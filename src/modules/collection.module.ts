import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionController } from 'src/controllers/collection.controller';
import { CollectionModel } from 'src/models/collection.model';
import { CollectionService } from 'src/services/collection.service';

@Module({
  imports: [TypeOrmModule.forFeature([CollectionModel])],
  controllers: [CollectionController],
  providers: [CollectionService],
})
export class CollectionModule {}
