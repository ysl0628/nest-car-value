import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { ReportsService } from './reports/reports.service';

@Module({
  imports: [UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService, ReportsService],
})
export class AppModule {}
