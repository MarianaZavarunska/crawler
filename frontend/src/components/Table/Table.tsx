import React, {FC} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ICrawledPage} from "../../interfaces";
import {NavLink} from "react-router-dom";

const tableObj:Partial<ICrawledPage> = {
    url: "",
    title:[],
    description:[],
    h1:[],
    h2:[],
    links:[],
    createdAt: ""
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


interface IProps {
    crawledPages: ICrawledPage[];
}

const TableComponent:FC<IProps> = (props) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {Object.keys(tableObj)
                            .map((col, headIndex)=>
                            <StyledTableCell key={"head-" + headIndex} align="right">{col.toUpperCase()}</StyledTableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                        {props.crawledPages
                            .map((row, index) => (
                            <StyledTableRow key={"row-" + index}>
                                {
                                    Object.entries(row)
                                        .filter(col => col[0] in tableObj)
                                        .map((cell, cellIndex) => (
                                        <StyledTableCell key={"cell-" + cellIndex} align="right">
                                            {cell[0] === "url"? cell[1] :
                                                    cell[0] === "createdAt"? new Date(cell[1]).toUTCString() :
                                                        <NavLink to={{pathname: `history/${row["_id"]}/${cell[0]}`}}
                                                                 state= {{ value : cell[1] }}>
                                                            {cell[1].length}
                                                        </NavLink>
                                            }

                                        </StyledTableCell>
                                    ))
                                }
                            </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export {TableComponent};

