import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from 'src/controllers/category.controller';
import { CategoryModel } from 'src/models/category.model';
import { CategoryService } from 'src/services/category.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryModel])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
