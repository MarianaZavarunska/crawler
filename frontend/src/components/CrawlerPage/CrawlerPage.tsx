import React, {FC, useState} from "react";
import {useForm} from "react-hook-form";

import "./CrawlerPage.css";
import {crawlService} from "../../services/crawl.service";
import {CircularProgress} from "@mui/material";
import {ICrawledPage, IForm} from "../../interfaces";
import {TableComponent} from "../Table/Table";

const CrawlerPage:FC = () => {
    const {register, handleSubmit, reset} = useForm<IForm>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [crawledPages, setCrawledPages] = useState<ICrawledPage[]>([]);


    const onSubmitForm = async(url:IForm) => {
        setIsLoading(true);
        const {data} = await crawlService.crawlPage(url);
        setIsLoading(false);
        console.log("result:", data);
        setCrawledPages([data])
        reset();
    }

    const onHistory = async() => {
        setIsLoading(true);
        const {data} = await crawlService.getHistory();
        setCrawledPages(data);
        setIsLoading(false);
    }

    const onClear = () => {
        setCrawledPages([]);
    }

    return (
        <>
            {isLoading ?
                <div className={"loader-container"}>
                    <CircularProgress size={100}/>
                    <CircularProgress size={100}/>
                </div> :
                <div className={"crawler-wrapper"}>
                    <div className={"crawler-container"} style={{ marginTop: (crawledPages && crawledPages.length) ? "10%": "20%"}}>
                        <form onSubmit={handleSubmit(onSubmitForm)}>
                            <input type={"text"} {...register("url", {required: true})} placeholder="Write a url.."/>
                            <button type={"submit"}>Crawl</button>
                        </form>

                        <div className={"history-container-btn"}>
                            <button onClick={() => onHistory()}>History</button>
                        </div>

                        <div className={"clear-btn-container"}>
                            <button onClick={() => onClear()}>Clear</button>
                        </div>
                    </div>
                    {(crawledPages && crawledPages.length > 0) &&
                          <TableComponent crawledPages={crawledPages}/>
                    }
                </div>
            }
        </>
    );
};

export {CrawlerPage};