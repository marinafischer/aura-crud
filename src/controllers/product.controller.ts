import {
  Param,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('/product')
export class ProductController {
  @Post()
  public async create(): Promise<any> {
    return { data: 'rota post' };
  }

  @Get()
  public async get(): Promise<any> {
    return { data: 'rota get' };
  }

  @Get(':id')
  public async getOne(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return { data: `rota get id ${id}` };
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
