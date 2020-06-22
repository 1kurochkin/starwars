import React from 'react';

import withConsumerHOC from "../../../HOCS/withConsumerHOC";

import Card from "../../../Components/Card/card";
import withDataHOC from "../../../HOCS/withDataHOC";
import withPreloaderHOC from "../../../HOCS/withPreloaderHOC";
import Avatar from "../../../Components/Avatar/avatar";
import List, {ListRow} from "../../../Components/List/list";
import Title from "../../../Components/Title/title";

const PlanetCardContainer = (props) => {

    const {getPlanetImage, id, data} = props

    const listRowConfigsArray = [
        {field : "climate", label: "Климат"},
        {field : "diameter", label: "Диаметр"},
        {field : "gravity", label: "Грвитация"},
        {field : "rotation_period", label: "Период вращения"},
        {field : "population", label: "Популяция"},
        {field : "surface_water", label: "Поверхностные водоёмы"},
        {field : "terrain", label: "Местность"},
    ]

    return (
        <Card configuration={{className: "planetCard"}}>
            <Avatar configuration={{className: "filmCard"}} image={getPlanetImage(id)}/>
            <List configuration={{className: "filmCard"}}>
                <ListRow configuration={{color: "colorOrange"}}>
                    <Title configuration={ {typeOfTitle: "titleBig", margin: "marginBottom1"} }>{data.name}</Title>
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
        getPlanetImage: ServerApi.getPlanetImage,
    }
}

export default withConsumerHOC(withDataHOC(withPreloaderHOC(PlanetCardContainer)), mapStateToProps)