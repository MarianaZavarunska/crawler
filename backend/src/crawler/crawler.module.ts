import { Module } from '@nestjs/common';
import { CrawlerController } from './crawler.controller';
import {MongooseModule} from "@nestjs/mongoose";

import { CrawlerService } from './crawler.service';
import { CrawlerRepository } from './crawler.repository';
import {Crawler, CrawlerSchema} from "../mongo/shemas/crawler.shema";

@Module({
  imports:[MongooseModule.forFeature([{name: Crawler.name, schema: CrawlerSchema}])],
  controllers: [CrawlerController],
  providers: [CrawlerService, CrawlerRepository]
})
export class CrawlerModule {}
