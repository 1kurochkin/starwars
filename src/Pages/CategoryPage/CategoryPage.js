import React from 'react';
import style from "./CategoryPageStyle.module.css"
import Pagination from "../../Components/Pagination/pagination";
import Title from "../../Components/Title/title";


const CategoryPage = (props) => {

    const {
        children,
        categoryTitle,
        pageNumber,
        pageCount,
        isHover,
        changePageNumber} = props

    return (
        <div className={style.wrapper}>
            <div className={`${style.backdrop} ${isHover && style.onHover}`}/>
            <div className={style.descriptionWrapper}>
                <div className={style.titleWrapper}>
                    <Title configuration={{typeOfTitle : "titleBig"}}>{categoryTitle}</Title>
                </div>
                <Pagination pageCount={pageCount} pageNumber={pageNumber} onClickHandler={changePageNumber} />
            </div>
            <div className={style.cardslistWrapper}>
                {children}
            </div>
        </div>
    );
}


export default React.memo(CategoryPage)
