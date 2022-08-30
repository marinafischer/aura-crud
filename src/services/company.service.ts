import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyModel } from 'src/models/company.model';
import { CompanySchema } from 'src/schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyModel) private model: Repository<CompanyModel>,
  ) {}

  public async create(body: CompanySchema): Promise<{ data: CompanySchema }> {
    const data = await this.model.save(body);
    return { data };
  }

  public async get(): Promise<{ data: CompanyModel[] }> {
    const data = await this.model.find({ relations: { partners: true } });
    return { data };
  }

  public async getOne(id: number): Promise<{ data: CompanyModel }> {
    const data = await this.model.findOne({ where: { id } });
    if (!data) throw new NotFoundException('O id informado não existe');
    return { data };
  }

  public async update(id: number, body: CompanySchema): Promise<{ data: any }> {
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
