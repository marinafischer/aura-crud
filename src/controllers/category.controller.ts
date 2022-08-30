import {
  Param,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoryModel } from 'src/models/category.model';
import { CategorySchema } from 'src/schemas/category.schema';
import { CategoryService } from 'src/services/category.service';

@Controller('/category')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Post()
  public async create(
    @Body() body: CategorySchema,
  ): Promise<{ data: CategorySchema }> {
    const data = await this.service.create(body);
    return data;
  }

  @Get()
  public async get(): Promise<{ data: CategoryModel[] }> {
    const data = await this.service.get();
    return data;
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: CategoryModel }> {
    const data = await this.service.getOne(id);
    return data;
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CategorySchema,
  ): Promise<{ data: any }> {
    const data = await this.service.update(id, body);
    return data;
  }

  @Delete(':id')
  public async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: string }> {
    const data = await this.service.delete(id);
    return data;
  }
}
