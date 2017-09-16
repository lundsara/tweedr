import React, { Component } from 'react';
import Tweed from './Tweed';

class TweedrFeed extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }
    render() {
        console.log('TweedrFeed rendering')
        console.log(`this is >> ${this.props.data}`)
        return (
            <div>{ this.props.data.map( tweeds => {
                return <Tweed tweed={tweeds} key={tweeds.id} />
                })}
                </div>
        )
    }
}

export default TweedrFeed;