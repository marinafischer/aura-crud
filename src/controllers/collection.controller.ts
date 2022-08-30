import {
  Param,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  ParseIntPipe,
  Body,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CollectionModel } from 'src/models/collection.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollectionSchema } from 'src/schemas/collection.schema';

@Controller('/collection')
export class CollectionController {
  constructor(
    @InjectRepository(CollectionModel)
    private model: Repository<CollectionModel>,
  ) {}

  @Post()
  public async create(@Body() body: CollectionSchema): Promise<{ data: any }> {
    try {
      const data = await this.model.save(body);
      return { data };
    } catch (error) {
      throw new ConflictException('deu ruim');
    }
  }

  @Get()
  public async get(): Promise<CollectionModel[]> {
    const data = await this.model.find({
      relations: {
        companyId: true,
        perks: true,
      },
    });
    return data;
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: any }> {
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

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CollectionSchema,
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
