import React from 'react';

const withDataHOC = (Component) => {

    return class extends React.PureComponent {
        state = {
            data: null,
        }

        componentDidMount() {
            this.props.getData()
                .then((data) => {
                    this.setState({data})
                })
                .catch(err => {
                    this.setState({data: null})
                });
        }

        componentDidUpdate(prevProps) {
            if (prevProps.getData === this.props.getData) {
                return false
            }
            this.props.getData()
                .then((data) => {
                    this.setState({data})
                })
                .catch(err => {
                    this.setState({data: null})
                });
        }

        render() {
            return <Component {...this.props} data={this.state.data}/>
        }
    }
}

export default withDataHOC