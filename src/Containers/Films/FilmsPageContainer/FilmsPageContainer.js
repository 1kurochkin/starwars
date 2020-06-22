import React from 'react';

import withConsumerHOC from "../../../HOCS/withConsumerHOC";

import Card from "../../../Components/Card/card";


import Avatar from "../../../Components/Avatar/avatar";
import withDataHOC from "../../../HOCS/withDataHOC";

import CategoryPage from "../../../Pages/CategoryPage/CategoryPage";

import withPreloaderHOC from "../../../HOCS/withPreloaderHOC";
import {NavLink} from "react-router-dom";

import List, {ListRow} from "../../../Components/List/list";

class FilmsPageContainer extends React.Component {

    state = {
        isHover : false
    }

    onMouseEnterHandler = () => {
        this.setState({isHover: true})
    }

    onMouseLeaveHandler = () => {
        this.setState({isHover: false})
    }

    render() {
        const {pageNumber, data: {count, results}, changePageNumber, getIdFromURL, getFilmImage} = this.props
        const pageCount = Math.ceil(count / 10)
        const filmsPageProps = {
            pageNumber,
            pageCount,
            categoryTitle: "Фильмы",
            results,
            changePageNumber
        }

        return (
            <CategoryPage isHover={this.state.isHover} {...filmsPageProps}>
                {results.map( (card) =>
                    <NavLink key={card.title} onMouseLeave={this.onMouseLeaveHandler} onMouseEnter={this.onMouseEnterHandler} to={`/films/${getIdFromURL(card.url)}`}>
                        <Card configuration={{className: "filmsPage"}}>
                            <List configuration={{className: "filmsPage"}}>
                                <Avatar configuration={{className : null}} image={getFilmImage(getIdFromURL(card.url))}/>
                                <ListRow configuration={{color: "colorOrange"}}>
                                    {card.title}
                                </ListRow>
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
            filmsPage : { pageNumber }
            },
        ServerApi,
        changePageNumber,
    } = providerValue

    return {
        pageNumber: pageNumber,
        getData : () => ServerApi.getFilmsList(pageNumber),
        getFilmImage : ServerApi.getFilmImage,
        getIdFromURL : ServerApi.getIdFromURL,
        changePageNumber: (nextOrPrev, pageCount, pageNumber) => changePageNumber(nextOrPrev, pageCount, pageNumber, "filmsPage"),
    }
}

export default withConsumerHOC(withDataHOC(withPreloaderHOC(FilmsPageContainer)), mapStateToProps)