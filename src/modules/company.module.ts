import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from 'src/controllers/company.controller';
import { CompanyModel } from 'src/models/company.model';
import { CompanyService } from 'src/services/company.service';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyModel])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}