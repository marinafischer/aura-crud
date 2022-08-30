import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollectionModel } from 'src/models/collection.model';
import { CollectionSchema } from 'src/schemas/collection.schema';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(CollectionModel)
    private model: Repository<CollectionModel>,
  ) { }

  public async create(
    body: CollectionSchema,
  ): Promise<{ data: CollectionSchema }> {
    const data = await this.model.save(body);
    return { data };
  }

  public async get(): Promise<{ data: CollectionModel[] }> {
    const data = await this.model.find({
      relations: {
        companyId: true,
        perks: true,
      },
    });
    return { data };
  }

  public async getOne(id: number): Promise<{ data: CollectionModel }> {
    const data = await this.model.findOne({
      where: { id },
      relations: {
        companyId: true,
        perks: true,
      },
    });
    if (!data) throw new NotFoundException('O id informado não existe');
    return { data };
  }

  public async update(
    id: number,
    body: CollectionSchema,
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
