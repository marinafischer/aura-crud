import {
  Param,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { CollectionModel } from 'src/models/collection.model';
import { CollectionSchema } from 'src/schemas/collection.schema';
import { CollectionService } from 'src/services/collection.service';

@Controller('/collection')
export class CollectionController {
  constructor(private service: CollectionService) {}

  @Post()
  public async create(
    @Body() body: CollectionSchema,
  ): Promise<{ data: CollectionSchema }> {
    const data = await this.service.create(body);
    return data;
  }

  @Get()
  public async get(): Promise<{ data: CollectionModel[] }> {
    const data = await this.service.get();
    return data;
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: CollectionModel }> {
    const data = await this.service.getOne(id);
    return data;
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CollectionSchema,
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
