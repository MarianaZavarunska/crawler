import {Injectable} from "@nestjs/common";

@Injectable()
export class Config {
    static PORT = process.env.PORT || 5500;
    static  HOST = process.env.HOST || "loho";
    static DB_URL = process.env.DB || "mongodb+srv://zavarinska:1234@cluster0.qxgr7wv.mongodb.net/?retryWrites=true&w=majority";
}
