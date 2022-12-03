import React from 'react';
import s from './../../static/css/Pagination.module.css'
import classNames from "classnames";

function PaginationButton({changeCurPage, pageToPaginate, itsCurPage}) {
    return (
        <div>
            <button className={classNames(s.paginationBtn, itsCurPage? s.paginationCurrentBtn:'')} onClick={
                itsCurPage? () => {}: () => {
                    changeCurPage(pageToPaginate)}
            }>{pageToPaginate}</button>
        </div>
    );
}

export default PaginationButton;