import React from 'react';
import style from "./avatarStyle.module.css"
import preloadPicture from "../../Pictures/big-placeholder.jpg";

class Avatar extends React.PureComponent {

    state = {
        isLoaded: true
    }

    componentDidUpdate(prevProps) {
        return prevProps.image !== this.props.image && this.setState({ isLoaded: true })
    }

    onErrHandler = () => {
        this.setState({ isLoaded: false })
    }

    render() {
        const {image, configuration: {className}} = this.props;
        const {isLoaded} = this.state

        return (
            <div className={`${style[className]} ${style.avatar}` }>
                {isLoaded ? <img onError={this.onErrHandler} src={image} alt=""/> : <img src={preloadPicture} alt=""/> }
            </div>
        );
    }
}

export default Avatar;
