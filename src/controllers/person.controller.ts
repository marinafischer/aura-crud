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
import { PersonModel } from 'src/models/person.model';
import { PersonSchema } from 'src/schemas/person.schema';

@Controller('/person')
export class PersonController {
  constructor(
    @InjectRepository(PersonModel) private model: Repository<PersonModel>,
  ) {}

  @Post()
  // Como parâmetro do Body, poderia colocar o ValidationPipe, mas como será usado em todas as rotas, usar na main
  public async create(
    @Body() body: PersonSchema,
  ): Promise<{ data: PersonModel }> {
    const data = await this.model.save(body);
    return { data };
  }

  @Get()
  public async get(): Promise<{ data: PersonModel[] }> {
    const data = await this.model.find();
    return { data };
  }

  @Get(':id')
  // dentro do decorator param, informa o parametro esperado e pode colocar validadores, ex ParseIntPipe
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ data: PersonModel }> {
    const data = await this.model.findOne({ where: { id } });
    // nest tem várias exceptions pré definidas, pode passar como parametro texto com info desejada
    if (!data) throw new NotFoundException('O id informado não existe');
    return { data };
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: PersonSchema,
  ): Promise<{ data: PersonModel }> {
    // o metodo update já retorna um erro caso não encontro o id informado
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
