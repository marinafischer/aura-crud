import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidationController } from 'src/controllers/validation.controller';
import { ValidationModel } from 'src/models/validation.model';
import { ValidationService } from 'src/services/validation.service';

@Module({
  imports: [TypeOrmModule.forFeature([ValidationModel])],
  controllers: [ValidationController],
  providers: [ValidationService],
})
export class ValidationModule {}
