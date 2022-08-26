import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { PersonModule } from './modules/person.module';
import { CompanyModule } from './modules/company.module';
import { CollectionModule } from './modules/collection.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // TypeOrm for Root busca arquivo na raiz da aplicação chamado ormconfig.json
  imports: [
    PersonModule,
    CompanyModule,
    CollectionModule,
    TypeOrmModule.forRoot({
      database: './db.sql',
      type: 'sqlite',
      synchronize: true,
      entities: ['dist/**/*.model.js'],
    }),
  ],
})
// implementação para uso do middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('person');
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'person', method: RequestMethod.GET });
  }
}
