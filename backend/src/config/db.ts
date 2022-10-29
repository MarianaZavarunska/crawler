import {Injectable} from "@nestjs/common";

@Injectable()
export class ConfigService {
     static db = "mongodb+srv://zavarinska:1234@cluster0.qxgr7wv.mongodb.net/?retryWrites=true&w=majority"
}


