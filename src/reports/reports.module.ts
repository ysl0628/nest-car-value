import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsController } from './reports.controller';
import { Report } from './reports.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Report])],
  controllers: [ReportsController],
})
export class ReportsModule {}
