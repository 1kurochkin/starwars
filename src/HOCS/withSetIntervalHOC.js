import React from 'react';

const withSetIntervalHOC = (Component, intervalTime) => {

    return class extends React.Component {
        intevalId

        componentDidMount() {
            this.intevalId = setInterval(() => {
                this.props.getRandomFact()
            }, intervalTime)
        }

        componentWillUnmount() {
            clearInterval(this.intevalId)
        }

        render() {
            return <Component {...this.props}/>
        }
    }
}

export default withSetIntervalHOC