
import React, { Component } from 'react';

class Tweed extends Component {
    
timeConversion (millisecs) {
    let mili = parseInt(millisecs,10);
    let date = new Date(mili);
    let n = date.toLocaleString();
    return n
}

render() {
    console.log('Tweeds rendering');
    return(
        <div className="tweed">
            <h2>{this.props.tweed.tweed_text} - {this.timeConversion(this.props.tweed.tweed_time)}</h2>
        </div>
        )
    }
}
export default Tweed;