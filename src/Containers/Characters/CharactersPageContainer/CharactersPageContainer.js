import React from 'react';

import withConsumerHOC from "../../../HOCS/withConsumerHOC";

import Card from "../../../Components/Card/card";


import Avatar from "../../../Components/Avatar/avatar";
import withDataHOC from "../../../HOCS/withDataHOC";

import CategoryPage from "../../../Pages/CategoryPage/CategoryPage";

import withPreloaderHOC from "../../../HOCS/withPreloaderHOC";
import {NavLink} from "react-router-dom";

import List, {ListRow} from "../../../Components/List/list";
import Title from "../../../Components/Title/title";

class CharactersPageContainer extends React.Component {

    render() {

        const {pageNumber, data: {count, results}, changePageNumber, getIdFromURL, getCharImage} = this.props
        const pageCount = Math.ceil(count / 10)
        const charactersPageProps = {
            pageNumber,
            pageCount,
            categoryTitle: "Персонажи",
            results,
            changePageNumber
        }

        const listRowConfigsArray = [
            {field : "gender", label: "Пол"},
            {field : "height", label: "Рост"},
            {field : "mass", label: "Вес"},]


        return (
            <CategoryPage {...charactersPageProps}>
                {results.map( (card) =>
                    <NavLink to={`/characters/${getIdFromURL(card.url)}`}>
                        <Card configuration={{className: "charactersPage"}}>
                            <Avatar configuration={{className : "characters"}} image={getCharImage(getIdFromURL(card.url))}/>
                            <List configuration={{className: "characters"}}>
                                <ListRow configuration={{color: "colorOrange"}}>
                                    <Title configuration={ {typeOfTitle: "titleMedium", margin: "mb-small"} }>{card.name}</Title>
                                </ListRow>
                                {listRowConfigsArray.map( ( {field, label} ) =>
                                    <ListRow configuration={{color: "colorOrange", label}}>
                                        {card[field]}
                                    </ListRow>)
                                }
                            </List>
                        </Card>
                    </NavLink>
                )}
            </CategoryPage>
        )
    }
}

const mapStateToProps = (providerValue) => {
    const {
        state : {
            charactersPage : { pageNumber }
            },
        ServerApi,
        changePageNumber,
    } = providerValue

    return {
        pageNumber: pageNumber,
        getData : () => ServerApi.getCharactersList(pageNumber),
        getCharImage : ServerApi.getCharImage,
        getIdFromURL : ServerApi.getIdFromURL,
        changePageNumber: (nextOrPrev, pageCount, pageNumber) => changePageNumber(nextOrPrev, pageCount, pageNumber, "charactersPage"),
    }
}

export default withConsumerHOC(withDataHOC(withPreloaderHOC(CharactersPageContainer)), mapStateToProps)