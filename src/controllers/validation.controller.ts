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
import { ValidationModel } from 'src/models/validation.model';
// import { ValidationSchema } from 'src/schemas/validation.schema';
import { ValidationService } from 'src/services/validation.service';

@Controller('/validation')
export class ValidationController {
  constructor(private service: ValidationService) {}

  @Post()
  public async create(@Body() body: any): Promise<{ data: any }> {
    const data = await this.service.create(body);
    return data;
  }

  @Get()
  public async get(): Promise<{ data: ValidationModel[] }> {
    const data = await this.service.get();
    return data;
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: ValidationModel }> {
    const data = await this.service.getOne(id);
    return data;
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any,
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
