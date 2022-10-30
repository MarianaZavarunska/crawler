import {ICrawledPage, IForm } from "../interfaces";
import { axiosService } from "./axios.service";
import {urls} from "../constants";

export const crawlService = {
    crawlPage: (formData:IForm) => axiosService.post<ICrawledPage>(urls.crawl, formData),
    getHistory: () => axiosService.get<ICrawledPage[]>(urls.history),
}


