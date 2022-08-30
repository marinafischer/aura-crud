import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonModel } from 'src/models/person.model';
import { PersonSchema } from 'src/schemas/person.schema';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonModel) private model: Repository<PersonModel>,
  ) { }

  public async create(body: PersonSchema): Promise<{ data: PersonModel }> {
    const data = await this.model.save(body);
    return { data };
  }

  public async get(): Promise<{ data: PersonModel[] }> {
    const data = await this.model.find();
    console.log(data);
    return { data };
  }
}
