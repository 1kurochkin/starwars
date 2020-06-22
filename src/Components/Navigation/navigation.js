import React from 'react';
import style from "./navigationStyle.module.css"
import {NavLink} from "react-router-dom";

const Navigation = () => {

    const navigationArray = [
        {id: "Home", link: "/home"},
        {id: "Films", link: "/films"},
        {id: "Characters", link: "/characters"},
        {id: "Planets", link: "/planets"}]

    return (
        <nav className={style.wrapper}>
            <NavLink to="/home">
                <div className={style.logo}/>
            </NavLink>
            <ul className={style.nav}>
                {navigationArray.map(({id, link}) =>
                    <li key={id} className={style.navItem}>
                        <NavLink activeClassName={style.active} to={link}>{id}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navigation;
