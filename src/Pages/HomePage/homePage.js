import React from 'react';
import style from "./homePageStyle.module.css"
import Title from "../../Components/Title/title";

const HomePage = (props) => {
    const { factText, children } = props;
    return (
        <div>
            <Title configuration={{typeOfTitle: "titleBig", color: "colorOrange"}}>
                Добро пожаловать на Star Wars Wiki!
            </Title>
            <p>
                Энциклопедию о вселенной Star Wars,
                в которой каждый может окунуться в
                мир фактов о величайшей приключенческой
                серии всех времен!
            </p>
            <div className={style.randomBannerWrapper}>
                {children}
            </div>
            <Title configuration={{typeOfTitle : "titleMedium"}}>
                Интересный факт
            </Title>
            <div className={style.factWrapper}>
                <p>
                    {factText}
                </p>
            </div>
        </div>
    );
}

export default React.memo(HomePage);
