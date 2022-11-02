import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { CrawlerModule } from './crawler/crawler.module';
import {Config} from "./config/config";

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
      }),
      MongooseModule.forRoot(Config.DB_URL),
      CrawlerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


