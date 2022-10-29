import React, {FC} from 'react';
import {useLocation, useParams} from "react-router-dom";

import "./HistoryItemPage.css";

const HistoryItemPage:FC = () => {
const location = useLocation();
const {property} = useParams();
const state = location.state ;

    return (
        <>
            <h2>All of {property} tag which was found</h2>
            <ul className={"history-item-container"}>
                {state.value.map((value: string, index: number)=> <li key={index}>{value}</li>)}
            </ul>
        </>

    );
};

export {HistoryItemPage} ;
