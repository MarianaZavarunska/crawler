import {Body, Controller, Get, Post} from '@nestjs/common';

import {CrawlerService} from "./crawler.service";
import {CreatePageDto} from "./dto";

@Controller()
export class CrawlerController {
    constructor(private crawlerService: CrawlerService) {}

    @Get("history")
    async getHistory() {
      return this.crawlerService.getHistory();
    }

    @Post("crawl")
    async createUrl( @Body() page: CreatePageDto) {
        return this.crawlerService.crawlPage(page.url)
    }


}



