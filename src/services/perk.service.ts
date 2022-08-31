import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerkModel } from 'src/models/perk.model';
import { PerkSchema } from 'src/schemas/perk.schema';

@Injectable()
export class PerkService {
  constructor(
    @InjectRepository(PerkModel) private model: Repository<PerkModel>,
  ) {}

  public async create(body: PerkSchema): Promise<{ data: PerkSchema }> {
    const data = await this.model.save(body);
    return { data };
  }

  public async get(): Promise<{ data: PerkModel[] }> {
    const data = await this.model.find();
    return { data };
  }

  public async getOne(id: number): Promise<{ data: PerkModel }> {
    const data = await this.model.findOne({
      where: { id },
      relations: { collection: true, company: true, category: true },
    });
    if (!data) throw new NotFoundException('O id informado não existe');
    return { data };
  }

  public async update(id: number, body: PerkSchema): Promise<{ data: any }> {
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
