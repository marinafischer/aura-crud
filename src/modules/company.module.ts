import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from 'src/controllers/company.controller';
import { CompanyModel } from 'src/models/company.model';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyModel])],
  controllers: [CompanyController],
})
export class CompanyModule {}
