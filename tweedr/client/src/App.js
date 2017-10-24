import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AddTweedForm from './components/AddTweedForm';
import TweederFeed from './components/TweedrFeed';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tweedDB: [],
      inputTextValue: '',
    };

    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleTweedSubmit = this.handleTweedSubmit.bind(this);
  }


  componentDidMount() {
    axios('https://scl-tweeder.herokuapp.com/api/tweeds')
      .then((res) => {
        this.setState({ tweedDB: res.data.data.tweeds });
      })
      .catch((err) => {
        console.log('data didnt come back!');
      });
  }

  handleInputTextChange(event) {
    this.setState({
      inputTextValue: event.target.value,
    });
  }

  handleTweedSubmit(event) {
    console.log('handling submit');
    event.preventDefault();
    axios.post('https://scl-tweeder.herokuapp.com/api/tweeds', {
      tweed: this.state.inputTextValue,
      time: this.state.inputTimeValue,
    })
      .then((res) => {
        console.log('the data that came back: ', res.data.data.tweed);
        if (res.data.data.tweed.id !== undefined) {
          this.setState(prevState => ({
            tweedDB: prevState.tweedDB.concat(res.data.data.tweed),
            inputTextValue: '',
          }));
        }
      }).catch(err =>
        console.log(err));
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tweeder</h2>
          <p>It's better than Twitter...</p>
        </div>
        <AddTweedForm
          handleTweedSubmit={this.handleTweedSubmit}
          handleInputTextChange={this.handleInputTextChange}
          inputTextValue={this.state.inputTextValue}
        />
        <TweederFeed
          data={this.state.tweedDB}
        />
      </div>
    );
  }
}

export default App;
