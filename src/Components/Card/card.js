import React from 'react';
import style from "./cardStyle.module.css"

const Card = (props) => {

    const { configuration: {className}, children } = props


    return (
        <div className={style[className] + " " + style.cardBase}>
            {children}
        </div>
    )
}

export default React.memo(Card);
