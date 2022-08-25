import { Module } from '@nestjs/common';
import { PersonModule } from './modules/person.module';
import { ProductModule } from './modules/poduct.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // TypeOrm for Root busca arquivo na raiz da aplicação chamado ormconfig.json
  imports: [
    ProductModule,
    PersonModule,
    TypeOrmModule.forRoot({
      database: './db.sql',
      type: 'sqlite',
      synchronize: true,
      entities: ['dist/**/*.model.js'],
    }),
  ],
})
export class AppModule { }
