import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryModel } from 'src/models/category.model';
import { CategorySchema } from 'src/schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryModel) private model: Repository<CategoryModel>,
  ) {}

  public async create(body: CategorySchema): Promise<{ data: CategorySchema }> {
    const data = await this.model.save(body);
    return { data };
  }

  public async get(): Promise<{ data: CategoryModel[] }> {
    const data = await this.model.find();
    return { data };
  }

  public async getOne(id: number): Promise<{ data: CategoryModel }> {
    const data = await this.model.findOne({ where: { id } });
    if (!data) throw new NotFoundException('O id informado não existe');
    return { data };
  }

  public async update(
    id: number,
    body: CategorySchema,
  ): Promise<{ data: any }> {
    await this.model.update(id, body);
    return { data: { id, ...body } };
  }

  public async delete(id: number): Promise<{ data: string }> {
    const data = await this.model.findOne({ where: { id } });
    if (!data) throw new NotFoundException('O id informado não existe');
    await this.model.delete(id);
    return { data: `O id ${id} foi deletado com sucesso` };
  }
}
