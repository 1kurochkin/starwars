import React from 'react';
import {Consumer} from "../Context/context";

const withConsumerHOC = (Component, mapStateToProps) => {

    return (props) => {
        return (
            <Consumer>
                {(state) => {
                    const consumerProps = mapStateToProps(state)
                    return <Component {...props} {...consumerProps} />
                }}
            </Consumer>
        )
    }

}

export default withConsumerHOC