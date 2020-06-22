import React from 'react';
import style from "./appStyle.module.css"
import Navigation from "../Components/Navigation/navigation";
import {Redirect, Route, Switch} from "react-router-dom";
import facts from "../ServerApi/facts.json";
import ServerApi from "../ServerApi/ServerApi";
import {Provider} from "../Context/context";
import HomePageContainer from "../Containers/Home/HomePageContainer/HomePageContainer";
import FilmsPageContainer from "../Containers/Films/FilmsPageContainer/FilmsPageContainer";
import FilmCardContainer from "../Containers/Films/FilmCardContainer/FilmCardContainer";
import CharactersPageContainer from "../Containers/Characters/CharactersPageContainer/CharactersPageContainer";
import CharacterCardContainer from "../Containers/Characters/CharacterCardContainer/CharacterCardContainer";
import PlanetsPageContainer from "../Containers/Planets/PlanetsPageContainer/PlanetsPageContainer";
import PlanetCardContainer from "../Containers/Planets/PlanetCardContainer/PlanetCardContainer";

const {data: factsData} = facts

class App extends React.Component {

    state = {
        homePage: {
            factText: factsData[Math.floor(Math.random() * factsData.length)].text
        },
        filmsPage: {
            pageNumber: 1,
        },
        charactersPage: {
            pageNumber: 1,
        },
        planetsPage: {
            pageNumber: 1,
        },
    }

    isNeedToChangePage = (id, pageCount, pageNumber) => {

        if (id === "next" && pageNumber === pageCount) {
            return false
        }
        if (id === "prev" && pageNumber === 1) {
            return false
        }
        return true
    }

    getNextPageNumber = (nextOrPrev, pageNumber) => {

        switch (nextOrPrev) {
            case "prev":
                return pageNumber - 1
            case "next":
                return pageNumber + 1
            default :
                return nextOrPrev
        }
    }

    changePageNumber = (nextOrPrev, pageCount, pageNumber, categoryPage) => {
        const nextPage = this.getNextPageNumber(nextOrPrev, pageNumber)

        if (this.isNeedToChangePage(nextOrPrev, pageCount, pageNumber)) {
            this.setState((state) => {
                return {...state, [categoryPage] : {pageNumber : nextPage}, }
            })
        }
    }

    getRandomFact = () => {
        const randomFact = factsData[Math.floor(Math.random() * factsData.length)].text
        this.setState({homePage : {factText : randomFact}})
    }

    ServerApi = new ServerApi()

    render() {
        const providerValue = {
            state : this.state,
            ServerApi : this.ServerApi,
            getRandomFact : this.getRandomFact,
            changePageNumber: this.changePageNumber,
        }
        const {getCharacter, getFilm, getPlanet} = this.ServerApi

        return (
            <Provider value={providerValue}>
                <div className={style.container}>
                    <Navigation/>
                    <div className={style.content}>
                        <Switch>
                            <Route path="/home" render={() => <HomePageContainer/>}/>
                            <Route path="/characters" exact render={() => <CharactersPageContainer /> }/>
                            <Route path="/characters/:id" exact render={ ( {match : {params : {id}}} ) => <CharacterCardContainer getData={() => getCharacter(id)} id={id}/> }/>
                            <Route path="/films" exact render={() => <FilmsPageContainer /> }/>
                            <Route path="/films/:id" exact render={ ( {match : {params : {id}}} ) => <FilmCardContainer getData={() => getFilm(id)} id={id}/> }/>
                            <Route path="/planets" exact render={() => <PlanetsPageContainer /> }/>
                            <Route path="/planets/:id" exact render={ ( {match : {params : {id}}} ) => <PlanetCardContainer getData={() => getPlanet(id)} id={id}/> }/>
                            <Redirect to="/home"/>
                        </Switch>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
