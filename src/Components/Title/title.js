import React from 'react';
import style from "./titleStyle.module.css"

const Title = ({configuration, children}) => {
    const {typeOfTitle, color, margin} = configuration

    return (
        <div className={`${style[typeOfTitle]} ${style[color]} ${style[margin]}`}>
            <span>{children}</span>
        </div>
    );
}

export default React.memo(Title);
