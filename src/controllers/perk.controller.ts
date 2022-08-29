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
import { PerkModel } from 'src/models/perk.model';
import { PerkSchema } from 'src/schemas/perk.schema';

@Controller('/perk')
export class PerkController {
  constructor(
    @InjectRepository(PerkModel) private model: Repository<PerkModel>,
  ) { }

  @Post()
  public async create(@Body() body: PerkSchema): Promise<{ data: PerkModel }> {
    const data = await this.model.save(body);
    return { data };
  }

  @Get()
  public async get(): Promise<{ data: PerkModel[] }> {
    const data = await this.model.find();
    return { data };
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: PerkModel }> {
    const data = await this.model.findOne({
      where: { id },
      relations: { collectionId: true, companyId: true, categoryId: true },
    });
    if (!data) throw new NotFoundException('O id informado não existe');
    return { data };
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PerkSchema,
  ): Promise<{ data: any }> {
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
