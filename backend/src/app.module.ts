import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CrawlerModule } from './crawler/crawler.module';
import {ConfigService} from "./config/db";

@Module({
  imports: [
      MongooseModule.forRoot(ConfigService.db),
      CrawlerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


