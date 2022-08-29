import {
  Param,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryModel } from 'src/models/category.model';
import { CategorySchema } from 'src/schemas/category.schema';

@Controller('/category')
export class CategoryController {
  constructor(
    @InjectRepository(CategoryModel) private model: Repository<CategoryModel>,
  ) {}

  @Post()
  public async create(
    @Body() body: CategorySchema,
  ): Promise<{ data: CategorySchema }> {
    const data = await this.model.save(body);
    return { data };
  }

  @Get()
  public async get(): Promise<{ data: CategoryModel[] }> {
    const data = await this.model.find();
    return { data };
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: CategoryModel }> {
    const data = await this.model.findOne({ where: { id } });
    if (!data) throw new NotFoundException('O id informado não existe');
    return { data };
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CategorySchema,
  ): Promise<{ data: CategoryModel }> {
    await this.model.update(id, body);
    return { data: { id, ...body } };
  }

  @Delete(':id')
  public async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: string }> {
    const data = await this.model.findOne({ where: { id } });
    if (!data) throw new NotFoundException('O id informado não existe');
    await this.model.delete(id);
    return { data: `O id ${id} foi deletado com sucesso` };
  }
}
