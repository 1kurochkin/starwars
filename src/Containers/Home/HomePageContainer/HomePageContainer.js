import React from 'react';
import HomePage from "../../../Pages/HomePage/homePage";
import withConsumerHOC from "../../../HOCS/withConsumerHOC";
import withSetIntervalHOC from "../../../HOCS/withSetIntervalHOC";
import HomePageRandomCharAvatarContainer from "./HomePageRandomCharAvatarContainer/HomePageRandomCharAvatarContainer";
import HomePageRandomFilmAvatarContainer from "./HomePageRandomFilmAvatarContainer/HomePageRandomFilmAvatarContainer";
import HomePageRandomPlanetAvatarContainer from "./HomePageRandomPlanetAvatarContainer/HomePageRandomPlanetAvatarContainer";

const HomePageContainer = (props) => {

    return (
        <HomePage {...props} >
            <HomePageRandomCharAvatarContainer/>
            <HomePageRandomFilmAvatarContainer/>
            <HomePageRandomPlanetAvatarContainer/>
        </HomePage>
    )
}

const mapStateToProps = (providerValue) => {
    const {state, getRandomFact } = providerValue

    return {
        factText : state.homePage.factText,
        getRandomFact : getRandomFact,
    }
}

export default withConsumerHOC(withSetIntervalHOC(HomePageContainer, 15000), mapStateToProps)