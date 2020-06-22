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

class PlanetsPageContainer extends React.Component {

    render() {

        const {pageNumber, data: {count, results}, changePageNumber, getIdFromURL, getPlanetImage} = this.props
        const pageCount = Math.ceil(count / 10)
        const charactersPageProps = {
            pageNumber,
            pageCount,
            categoryTitle: "Планеты",
            results,
            changePageNumber
        }

        const listRowConfigsArray = [
            {field : "diameter", label: "Диаметр"},
            {field : "population", label: "Популяция"},
            {field : "rotation_period", label: "Период вращения"},]


        return (
            <CategoryPage {...charactersPageProps}>
                {results.map( (card) =>
                    <NavLink to={`/planets/${getIdFromURL(card.url)}`}>
                        <Card configuration={{className: "planetsPage"}}>
                            <Avatar configuration={{className : "planetsPage"}} image={getPlanetImage(getIdFromURL(card.url))}/>
                            <List configuration={{className: null}}>
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
            planetsPage : { pageNumber }
            },
        ServerApi,
        changePageNumber,
    } = providerValue

    return {
        pageNumber: pageNumber,
        getData : () => ServerApi.getPlanetsList(pageNumber),
        getPlanetImage : ServerApi.getPlanetImage,
        getIdFromURL : ServerApi.getIdFromURL,
        changePageNumber: (nextOrPrev, pageCount, pageNumber) => changePageNumber(nextOrPrev, pageCount, pageNumber, "planetsPage"),
    }
}

export default withConsumerHOC(withDataHOC(withPreloaderHOC(PlanetsPageContainer)), mapStateToProps)