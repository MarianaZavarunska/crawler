import {ICrawledPage, IForm } from "../interfaces";
import { axiosService } from "./axios.service";
import {urls} from "../constants";

export const crawlService = {
    crawlPage: (url:IForm) => axiosService.post<ICrawledPage>(urls.crawl, url),
    getHistory: () => axiosService.get<ICrawledPage[]>(urls.history),
}


