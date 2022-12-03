import React from 'react';
import s from './../../static/css/Pagination.module.css'
import classNames from "classnames";
import PaginationButton from "./PaginationButton";

const Pagination = ({curPage, hasPrev, hasNext, changeCurPage}) => {
    curPage = Number(curPage);
    const itsCurPage = true;
    let prevPage = curPage - 1;
    let nextPage = curPage + 1;
    if (hasNext && hasPrev) {
        return (
            <div className={s.paginationWrapper}>
                <PaginationButton changeCurPage={changeCurPage} pageToPaginate={prevPage}/>
                <PaginationButton changeCurPage={changeCurPage} pageToPaginate={curPage} itsCurPage={itsCurPage}/>
                <PaginationButton changeCurPage={changeCurPage} pageToPaginate={nextPage}/>
            </div>
        )
    } else if (hasPrev) {
        return (
            <div  className={s.paginationWrapper}>
                <PaginationButton changeCurPage={changeCurPage} pageToPaginate={prevPage}/>
                <PaginationButton changeCurPage={changeCurPage} pageToPaginate={curPage} itsCurPage={itsCurPage}/>
            </div>
        )
    } else if (hasNext) {
        return (
            <div className={s.paginationWrapper}>
                <PaginationButton changeCurPage={changeCurPage} pageToPaginate={curPage} itsCurPage={itsCurPage}/>
                <PaginationButton changeCurPage={changeCurPage} pageToPaginate={nextPage}/>
            </div>
        )
    }
};

export default Pagination;