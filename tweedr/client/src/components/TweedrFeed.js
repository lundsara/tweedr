import React, { Component } from 'react';
import Tweed from './Tweed';

class TweedrFeed extends Component {
    render() {
        console.log('TweedrFeed rendering')
        console.log(this.props.data)
        return (
            <div>{ this.props.data.map( tweeds => {
                return <Tweed tweed={tweeds} key={tweeds.id} />
                })}
                </div>
        )
    }
}

export default TweedrFeed;