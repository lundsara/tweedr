
import React, { Component } from 'react';

class Tweed extends Component {
  timeConversion(millisecs) {
    const mili = parseInt(millisecs, 10);
    const date = new Date(mili);
    const n = date.toLocaleString();
    return n;
  }

  render() {
    return (
      <div className="tweed">
        <h2>{this.props.tweed.tweed_text} - {this.timeConversion(this.props.tweed.tweed_time)}</h2>
      </div>
    );
  }
}
export default Tweed;
