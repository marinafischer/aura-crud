import {
  Param,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  ParseIntPipe,
  Body,
  UseGuards,
} from '@nestjs/common';
import { CompanyModel } from 'src/models/company.model';
import { FirebaseAuthGuard } from 'src/firebase/firebase-auth.guard';
import { CompanySchema } from 'src/schemas/company.schema';
import { CompanyService } from 'src/services/company.service';

@Controller('/company')
export class CompanyController {
  constructor(private service: CompanyService) { }

  @Post()
  public async create(
    @Body() body: CompanySchema,
  ): Promise<{ data: CompanySchema }> {
    const data = await this.service.create(body);
    return data;
  }

  @Get()
  // usando o autenticação do firebase em um metodo especifico, pode usar em toda controller
  // @UseGuards(FirebaseAuthGuard)
  public async get(): Promise<{ data: CompanyModel[] }> {
    const data = await this.service.get();
    return data;
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: CompanyModel }> {
    const data = await this.service.getOne(id);
    return data;
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: CompanySchema,
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
