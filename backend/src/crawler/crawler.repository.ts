import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {Crawler, CrawlerDocument} from "../../mongo/shemas/crawler.shema";
import {Model} from "mongoose";

import {CrawlerObjDto} from "./dto";

@Injectable()
export class CrawlerRepository {
    constructor(@InjectModel(Crawler.name) private crawlerModel: Model<CrawlerDocument>) {}

    async create(crawlerObj: CrawlerObjDto , url: string, parentID: string, depth: number): Promise<Crawler> {
        const newUrl = await this.crawlerModel.create(
            {
                url,
                title: crawlerObj.title,
                description: crawlerObj.meta,
                h1: crawlerObj.h1,
                h2: crawlerObj.h2,
                links: crawlerObj.a,
                parentID,
                depth,
            }
        )
        return newUrl.save();
    }

    async getAll():Promise<Crawler[]> {
        return this.crawlerModel.find()
    }

    async getAllByParentID(parentID: string) {
        return this.crawlerModel.find().where({parentID});
    }
}
