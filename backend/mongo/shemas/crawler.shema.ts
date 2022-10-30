import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, now} from 'mongoose';


export type CrawlerDocument = Crawler & Document;

@Schema({timestamps: true})
export class Crawler {
    @Prop()
    url: string;

    @Prop()
    title: string[];

    @Prop()
    description: string[];

    @Prop()
    h1: string[];

    @Prop()
    h2: string[];

    @Prop()
    links: string[];

    @Prop({default: null})
    parentID: string;

    @Prop({default: now()})
    createdAt: Date;

    @Prop({default: now()})
    updatedAt: Date;
}

export const CrawlerSchema = SchemaFactory.createForClass(Crawler);
