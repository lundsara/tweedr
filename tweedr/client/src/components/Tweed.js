// Holds one individual tweed
import React, { Component } from 'react';

class Tweed extends Component {
    
render() {
    console.log('Tweeds rendering');
    return(
        <div className="tweed">
            <h2>{this.props.tweed.tweed_text} - {this.props.tweed.tweed_time}</h2>
        </div>
        )
    }
}
export default Tweed;