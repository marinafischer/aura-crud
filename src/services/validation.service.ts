import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ValidationModel } from 'src/models/validation.model';
import getCode from 'src/common/helpers/getCode';
// import { ValidationSchema } from 'src/schemas/validation.schema';

@Injectable()
export class ValidationService {
  constructor(
    @InjectRepository(ValidationModel)
    private model: Repository<ValidationModel>,
  ) {}

  public async create(body: any): Promise<{ data: any }> {
    const code = getCode();
    const data = await this.model.save({ ...body, code });
    return { data };
  }

  public async get(): Promise<{ data: ValidationModel[] }> {
    const data = await this.model.find();
    getCode();
    return { data };
  }

  public async getOne(id: number): Promise<{ data: ValidationModel }> {
    const data = await this.model.findOne({
      where: { id },
      relations: { collection: true, company: true, perk: true },
    });
    if (!data) throw new NotFoundException('O id informado não existe');
    return { data };
  }

  public async update(id: number, body: any): Promise<{ data: any }> {
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
