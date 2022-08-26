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
  public async get(): Promise<{ data: CollectionModel[] }> {
    const data = await this.model.find({
      relations: {
        companyId: true,
      },
    });
    return { data };
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: any }> {
    return { data: `rota get ${id}` };
  }

  @Put(':id')
  public async update(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return { data: `rota put ${id}` };
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return { data: `rota delete ${id}` };
  }
}
