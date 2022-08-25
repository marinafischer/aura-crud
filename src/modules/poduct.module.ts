import { Module } from '@nestjs/common';
import { ProductController } from 'src/controllers/product.controller';

@Module({
  controllers: [ProductController],
})
export class ProductModule { }
