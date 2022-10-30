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
    const [depth, setDepth] = useState<number>(0);
    const [crawledPagesData, setCrawledPagesData] = useState<{crawledPages: ICrawledPage[], depth: number}>({crawledPages:[], depth: 0});


    const onChange = async(element:any) =>  {
        setDepth(element.target.value as number);
    }

    const onSubmitForm = async(formData:IForm) => {
        try {
            formData.depth = Number(formData.depth);
            setIsLoading(true);
            const {data} = await crawlService.crawlPage(formData);
            setIsLoading(false);
            setCrawledPagesData({ crawledPages: [data], depth: 0});
            reset();
        } catch (e) {
          alert("Error");
          setIsLoading(false);
        }

    }


    const onHistory = async() => {
        setIsLoading(true);
        const {data} = await crawlService.getHistory();
        setCrawledPagesData({crawledPages: data, depth});
        setIsLoading(false);

    }

    const onClear = () => {
        setCrawledPagesData({crawledPages:[], depth: 0});
    }

    return (
        <>
            {isLoading ?
                <div className={"loader-container"}>
                    <CircularProgress size={100}/>
                    <CircularProgress size={100}/>
                </div> :
                <div className={"crawler-wrapper"}>
                    <div className={"crawler-container"} style={{ marginTop:
                            (crawledPagesData.crawledPages && crawledPagesData.crawledPages.length) ? "10%": "20%"
                    }}>
                        <form onSubmit={handleSubmit(onSubmitForm)}>
                            <div className={"dropdown-container"}>
                                <select  {...register("depth")} onChange={onChange}>
                                    <option defaultChecked={true}>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>

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
                    {(crawledPagesData.crawledPages && crawledPagesData.crawledPages.length > 0) &&
                          <TableComponent crawledPagesData={crawledPagesData}/>
                    }
                </div>
            }
        </>
    );
};

export {CrawlerPage};
