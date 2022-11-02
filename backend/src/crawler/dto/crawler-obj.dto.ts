import {IsArray, IsString} from "@nestjs/class-validator";

export class CrawlerObjDto {

    @IsString({each: true})
    public  title: string[];

    @IsString({each: true})
    public  h1: string[];

    @IsString({each: true})
    public h2: string[];

    @IsString({each: true})
    public meta: string[];

    @IsString({each: true})
    public a: string[];
}
