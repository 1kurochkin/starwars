import React from 'react';

import withConsumerHOC from "../../../../HOCS/withConsumerHOC";

import Avatar from "../../../../Components/Avatar/avatar";
import withDataHOC from "../../../../HOCS/withDataHOC";
import withPreloaderHOC from "../../../../HOCS/withPreloaderHOC";
import {NavLink} from "react-router-dom";

const HomePageRandomCharAvatarContainer = ({ getCharImage, getIdFromURL, data : {url} }) => {
    const id = getIdFromURL(url)
    return (
        <NavLink to={`/characters/${id}`} ><Avatar configuration={{className: "home"}} image={getCharImage(id)}/></NavLink>
    )
}

const mapStateToProps = (providerValue) => {
    const {ServerApi} = providerValue
    const randomId = Math.ceil(Math.random() * 81)
    return {
        getData : () => ServerApi.getCharacter(randomId),
        getCharImage : ServerApi.getCharImage,
        getIdFromURL : ServerApi.getIdFromURL
    }
}

export default withConsumerHOC(withDataHOC(withPreloaderHOC(HomePageRandomCharAvatarContainer)), mapStateToProps)