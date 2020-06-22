import React from 'react';
import Preloader from "../Components/Preloader/preloader";

const withPreloaderHOC = (Component) => {

    return (props) => {

        const { data } = props
        return !data ? <Preloader/> : <Component {...props} />
    }
}

export default withPreloaderHOC