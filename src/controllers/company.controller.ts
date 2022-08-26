import {
  Param,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  ParseIntPipe,
  NotFoundException,
  Body,
  ConflictException,
} from '@nestjs/common';
import { CompanyModel } from 'src/models/company.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanySchema } from 'src/schemas/company.schema';

@Controller('/company')
export class CompanyController {
  constructor(
    @InjectRepository(CompanyModel) private model: Repository<CompanyModel>,
  ) {}

  @Post()
  public async create(
    @Body() body: CompanySchema,
  ): Promise<{ data: CompanyModel }> {
    try {
      const data = await this.model.save(body);
      return { data };
    } catch (error) {
      throw new ConflictException('cnpj e endereço devem ser unicos');
    }
  }

  @Get()
  public async get(): Promise<{ data: CompanyModel[] }> {
    const data = await this.model.find();
    return { data };
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: CompanyModel }> {
    const data = await this.model.findOne({
      where: { id },
      relations: {
        collections: true,
      },
    });
    if (!data) throw new NotFoundException('O id informado não existe');
    return { data };
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
