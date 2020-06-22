import React from 'react';

import withConsumerHOC from "../../../HOCS/withConsumerHOC";

import Card from "../../../Components/Card/card";
import withDataHOC from "../../../HOCS/withDataHOC";
import withPreloaderHOC from "../../../HOCS/withPreloaderHOC";
import Avatar from "../../../Components/Avatar/avatar";
import List, {ListRow} from "../../../Components/List/list";
import Title from "../../../Components/Title/title";

const FilmCardContainer = (props) => {

    console.log(props, "FilmCardContainer")

    const {getFilmImage, id, data} = props

    const fieldsArray = [
        {field : "director", label: "Режисёр"},
        {field : "producer", label: "Продюсеры"},
        {field : "release_date", label: "Дата начала проката"},
        {field : "opening_crawl", label: "Сюжет"}]

    return (
        <Card configuration={{className: "filmCard"}}>
            <Avatar configuration={{className: "films"}} image={getFilmImage(id)}/>
            <List configuration={{className: "filmCard"}}>
                <ListRow configuration={{color: "colorOrange"}}>
                    <Title configuration={ {typeOfTitle: "titleBig", margin: "marginBottom1"} }>{data.title}</Title>
                </ListRow>
                {fieldsArray.map( ( {field, label} ) =>
                    <ListRow configuration={{color: "colorOrange", label}}>
                        {data[field]}
                    </ListRow>)
                }
            </List>
        </Card>
    )
}

const mapStateToProps = (providerValue) => {
    const {ServerApi} = providerValue

    return {
        getFilmImage: ServerApi.getFilmImage
    }
}

export default withConsumerHOC(withDataHOC(withPreloaderHOC(FilmCardContainer)), mapStateToProps)