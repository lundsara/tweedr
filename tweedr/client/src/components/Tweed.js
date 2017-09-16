// Holds one individual tweed
import React, { Component } from 'react';

class Tweed extends Component {
    
    // https://stackoverflow.com/questions/175554/how-to-convert-milliseconds-into-human-readable-form
conversion (millisecs) {
    // console.log('conversion happening!! ')
    // milisecs are coming in as str, we need them as Int
    let mili = parseInt(millisecs);
    let date = new Date(mili);
    let days = date.getUTCDate()-1
    let hours = date.getUTCHours()
    let mins = date.getUTCMinutes()
    let sec = date.getUTCSeconds()
    let str = `${days} days, ${hours} hours, ${mins} minutes, ${sec} seconds`;
    // str += date.getUTCDate()-1 + " days, ";
    // str += date.getUTCHours() + " hours, ";
    // str += date.getUTCMinutes() + " minutes, ";
    // str += date.getUTCSeconds() + " seconds ";
    // console.log(millisecs)
    // let parString = parseInt(str,10)
    // console.log(`This is inside the conversion function ${typeof mins}`)
    // console.log(typeof str);
    // console.log(str);
    return str
}

// let newTime = conversion(this.props.tweed.tweed_time)

render() {
    console.log('Tweeds rendering');
    return(
        <div className="tweed">
            <h2>{this.props.tweed.tweed_text} - {this.conversion(this.props.tweed.tweed_time)}</h2>
        </div>
        )
    }
}
export default Tweed;