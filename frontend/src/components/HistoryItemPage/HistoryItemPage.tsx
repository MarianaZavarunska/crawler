import React, {FC, useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import "./HistoryItemPage.css";
import {TableComponent} from "../Table/Table";
import {crawlService} from "../../services/crawl.service";
import {ICrawledPage} from "../../interfaces";

const HistoryItemPage:FC = () => {
const location = useLocation();
const {property} = useParams();
const state = location.state ;
const [crawledPages, setCrawledPages] = useState<ICrawledPage[]>([]);

useEffect(() => {
    async function loadCrawledPages(){
        try {
            if(state.parentID){
                const {data} = await crawlService.getHistoryByParentID(state.parentID);
                setCrawledPages(data);
            }
        } catch (e){
            alert("Error");
        }
    }

    loadCrawledPages();
}, [state.parentID])

    return (
        <>
            <h2>All of {property} tag which was found</h2>
            {!state.parentID || property !== 'links' || (!crawledPages.length && state.value) ?
                <ul className={"history-item-container"}>
                    {state.value.map((value: string, index: number) => <li key={index}>{value}</li>)}
                </ul>
            : <TableComponent crawledPagesData={{crawledPages: crawledPages, depth: state.depth}}/>
            }
        </>

    );
};

export {HistoryItemPage} ;
