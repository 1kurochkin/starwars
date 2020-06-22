import React from 'react';
import withConsumerHOC from "../../../../HOCS/withConsumerHOC";
import Avatar from "../../../../Components/Avatar/avatar";
import withDataHOC from "../../../../HOCS/withDataHOC";
import withPreloaderHOC from "../../../../HOCS/withPreloaderHOC";
import {NavLink} from "react-router-dom";

const HomePageRandomPlanetAvatarContainer = ({getPlanetImage, getIdFromURL, data: {url} }) => {
    const id = getIdFromURL(url)
    return (
        <NavLink to={`/planets/${id}`} ><Avatar configuration={{className: "home"}} image={getPlanetImage(id)}/></NavLink>
    )
}


const mapStateToProps = (providerValue) => {
    const {ServerApi} = providerValue
    const randomId = Math.ceil(Math.random() * 19)
    return {
        getData : () => ServerApi.getCharacter(randomId),
        getPlanetImage : ServerApi.getPlanetImage,
        getIdFromURL : ServerApi.getIdFromURL
    }
}

export default withConsumerHOC(withDataHOC(withPreloaderHOC(HomePageRandomPlanetAvatarContainer)), mapStateToProps)