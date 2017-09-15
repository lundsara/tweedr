// Holds one individual tweed
import React, { Component } from 'react';

class Tweed extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.inputTextValue !== this.props.inputTextValue;
    }
render() {
    console.log('Tweeds rendering');
    return(
        <div className="tweed">
            <h2>{this.props.inputTextValue}</h2>
        </div>
        )
    }
}
export default Quote;