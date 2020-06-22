import React from 'react';
import style from "./paginationStyle.module.css"


const Pagination = ({onClickHandler, pageNumber, pageCount}) => {

    const {paginationBtnsWrapper, paginationBtn} = style

    return (
            <div>
                <span>{`cтр. ${pageNumber} из ${pageCount}`}</span>
                <div style={{display : pageCount <=1 && "none" }} className={paginationBtnsWrapper}>
                    {pageNumber === 1 ? null : <div className={paginationBtn} onClick={() => onClickHandler("prev", pageCount, pageNumber)}>prev</div>}
                    {pageNumber === pageCount ? null : <div className={paginationBtn} onClick={() => onClickHandler("next", pageCount, pageNumber)}>next</div>}
                </div>
            </div>
    );
}

export default Pagination;
