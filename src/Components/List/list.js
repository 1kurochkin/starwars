import React from 'react';
import style from "./listStyle.module.css"

const ListRow = React.memo( props => {

    const {
        configuration: {color, label},
        children} = props
    return (
        <li>
            {label && <span>{label} : </span>}
            <span className={style[color]}>{children}</span>
        </li>
    )
})

export {ListRow}


const List = (props) => {

    const { configuration : { className }, children} = props

    return (
        <ul className={style[className]}>
            { React.Children.map( children, child => React.cloneElement(child) ) }
        </ul>
    )
}

export default React.memo(List);
