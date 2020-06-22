import React from 'react';
import withConsumerHOC from "../../../../HOCS/withConsumerHOC";
import Avatar from "../../../../Components/Avatar/avatar";
import withDataHOC from "../../../../HOCS/withDataHOC";
import withPreloaderHOC from "../../../../HOCS/withPreloaderHOC";
import {NavLink} from "react-router-dom";

const HomePageRandomFilmAvatarContainer = ({getFilmImage, getIdFromURL, data : {url} }) => {
    const id = getIdFromURL(url)
    return (
        <NavLink to={`/films/${id}`} ><Avatar configuration={{className: "home"}} image={getFilmImage(id)}/></NavLink>
    )
}

const mapStateToProps = (providerValue) => {
    const {ServerApi} = providerValue
    const randomId = Math.ceil(Math.random() * 6)
    return {
        getData : () => ServerApi.getFilm(randomId),
        getFilmImage : ServerApi.getFilmImage,
        getIdFromURL : ServerApi.getIdFromURL
    }
}

export default withConsumerHOC(withDataHOC(withPreloaderHOC(HomePageRandomFilmAvatarContainer)), mapStateToProps)