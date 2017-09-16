import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AddTweedForm from './components/AddTweedForm';
import TweederFeed from './components/TweedrFeed';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tweedDB: [],
      inputTimeValue: '',
      inputTextValue: '',
    }

    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleTweedSubmit = this.handleTweedSubmit.bind(this);
  }


  componentDidMount() {
    console.log('App.js mount');
    axios('http://localhost:3002/api/tweeds')
    // .then(res => {res.json()})
     .then((res) => {
      console.table(res.data.data.tweeds);
      this.setState({tweedDB: res.data.data.tweeds});
      })
      .catch(err => {
        console.log('data didnt come back!');
      });
    }

    handleInputTextChange(event) {
      this.setState({
        inputTextValue: event.target.value
      })
    }

    handleTweedSubmit(event) {
      console.log('handling submit')
      event.preventDefault();
      // console.log(event.target.children)
      // event.target.text = '';
      axios.post('http://localhost:3002/api/tweeds', {
        tweed: this.state.inputTextValue,
      })
        .then(res => {
          console.log("the data that came back: ", res.data.data.tweed);
          if(res.data.data.tweed.id !== undefined) {
            // const newTweed = {
            //   text: res.data.data.tweed.tweed_text,
            // }
            this.setState((prevState) => {
              return {
                  tweedDB: prevState.tweedDB.concat(res.data.data.tweed),
                }
            })
          }
        }).catch(err => 
          console.log(err));
        }
    

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tweeder</h2>
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
