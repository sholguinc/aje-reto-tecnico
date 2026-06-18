import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { ClientsModule } from './clients/clients.module';


@Module({
  imports: [
    CommonModule,
    ClientsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
