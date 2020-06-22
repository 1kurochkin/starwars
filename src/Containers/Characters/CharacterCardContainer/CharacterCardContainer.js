import React from 'react';

import withConsumerHOC from "../../../HOCS/withConsumerHOC";

import Card from "../../../Components/Card/card";
import withDataHOC from "../../../HOCS/withDataHOC";
import withPreloaderHOC from "../../../HOCS/withPreloaderHOC";
import Avatar from "../../../Components/Avatar/avatar";
import List, {ListRow} from "../../../Components/List/list";
import Title from "../../../Components/Title/title";

const CharacterCardContainer = (props) => {

    console.log(props, "CharacterCardContainer")

    const {getCharImage, id, data} = props

    const listRowConfigsArray = [
        {field : "gender", label: "Пол"},
        {field : "height", label: "Рост"},
        {field : "mass", label: "Вес"},
        {field : "skin_color", label: "Цвет кожи"},
        {field : "eye_color", label: "Цвет глаз"},
        {field : "hair_color", label: "Цвет волос"}]

    return (
        <Card configuration={{className: "characterCard"}}>
            <Avatar configuration={{className: null}} image={getCharImage(id)}/>
            <List configuration={{className: "characterCard"}}>
                <ListRow configuration={{color: "colorOrange"}}>
                    <Title configuration={ {typeOfTitle: "titleBig", margin: "mb-small"} }>{data.name}</Title>
                </ListRow>
                {listRowConfigsArray.map( ( {field, label} ) =>
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
        getCharImage: ServerApi.getCharImage,
    }
}

export default withConsumerHOC(withDataHOC(withPreloaderHOC(CharacterCardContainer)), mapStateToProps)