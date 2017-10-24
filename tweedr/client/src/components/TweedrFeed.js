import React, { Component } from 'react';
import Tweed from './Tweed';

class TweedrFeed extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }
  render() {
    return (
      <div>{ this.props.data.map((tweeds) => <Tweed tweed={tweeds} key={tweeds.id}/>)}
      </div>
    );
  }
}
export default TweedrFeed;
