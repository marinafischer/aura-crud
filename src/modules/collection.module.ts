import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionController } from 'src/controllers/collection.controller';
import { CollectionModel } from 'src/models/collection.model';

@Module({
  imports: [TypeOrmModule.forFeature([CollectionModel])],
  controllers: [CollectionController],
})
export class CollectionModule {}
