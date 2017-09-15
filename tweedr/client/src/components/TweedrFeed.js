import React, { Component } from 'react';
import Tweed from './Tweed';

class TweedrFeed extends Component {
    render() {
        console.log('TweedrFeed rendering')
        return (
            <div>{ this.props.data.map( tweed => {
                return <Tweed quote={tweed} key={tweed.id} />
                })}
                </div>
        )
    }
}

export default TweedrFeed;