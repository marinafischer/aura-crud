import {
  Param,
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';

import { PerkModel } from 'src/models/perk.model';
import { PerkSchema } from 'src/schemas/perk.schema';
import { PerkService } from 'src/services/perk.service';

@Controller('/perk')
export class PerkController {
  constructor(private service: PerkService) {}

  @Post()
  public async create(@Body() body: PerkSchema): Promise<{ data: PerkSchema }> {
    const data = await this.service.create(body);
    return data;
  }

  @Get()
  public async get(): Promise<{ data: PerkModel[] }> {
    const data = await this.service.get();
    return data;
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: PerkModel }> {
    const data = await this.service.getOne(id);
    return data;
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PerkSchema,
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
