import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CategoryModule } from './modules/category.module';
import { CompanyModule } from './modules/company.module';
import { CollectionModule } from './modules/collection.module';
import { PerkModule } from './modules/perk.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PerkModule,
    CategoryModule,
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
    consumer.apply(LoggerMiddleware).forRoutes('perks', 'company');
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'person', method: RequestMethod.GET });
  }
}
