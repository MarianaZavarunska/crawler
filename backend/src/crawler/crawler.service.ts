import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { link } from 'fs';
import puppeteer from 'puppeteer';

import {CrawlerRepository} from "./crawler.repository";
import {CrawlerObjDto} from "./dto";


@Injectable()
export class CrawlerService {
    constructor(private crawlerRepository: CrawlerRepository) {}

    async crawlPage(url: string, depth: number, parentID = null) {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url);

            const crawledObj = await page.evaluate(() => {
                const selectors = ["title","h1","h2","meta","a"];
                const result = {} as CrawlerObjDto;

                selectors.forEach(selector => {
                    result[selector] = [];
                    const listOfElements = [...document.querySelectorAll(selector)];

                    switch(selector)
                    {
                        case "title":
                        case "h1":
                        case "h2": result[selector] = listOfElements.map(el => el.textContent); break;
                        case "meta": {
                            result[selector] = listOfElements.reduce((total, current) =>
                                current.getAttribute("name")?.toLowerCase() === "description"  ?
                                    [...total, current.getAttribute("content")] : total , []);
                            break;
                        } break;

                        case "a":
                        {
                            result[selector] = listOfElements.map(anchor => {
                                return anchor.getAttribute('href');
                            }).filter(item => !!item && item.indexOf('javascript:void(0)') < 0);
                        } break;
                    }
                })
                return result;
            })

            await browser.close();

            const response = await this.crawlerRepository.create(crawledObj, url, parentID);

            if(depth > 0) {
                for (const link of response.links) {
                    await this.crawlPage(link, depth - 1, response["_id"]);
                }
            }
            return response;
        } catch (e) {
            // better to create exception filter to catch all types of exceptions;
            throw new Error(`${e.message}`)
        }

    }

    async getHistory() {
        return this.crawlerRepository.getAll();
    }
}


