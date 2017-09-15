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
      inputTweedValue: '',
    }

    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleTweedSubmit = this.handleTweedSubmit.bind(this);
  }


  componentDidMount() {
    console.log('data mount');
    axios('http://localhost:3001/api/tweeds')
     .then(res => {
      this.setState(prevState => {
        return{
        tweedDB: this.data,
      }
      
     });
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
      event.target.text = '';
      axios.post('http://localhost:3001/api/tweeds', {
        text: this.state.inputTextValue,
      })
        .then(res => {
          if(res.data.tweeds.id !== undefined) {
            const newTweed = {
              text: res.data.tweeds.tweed_text,
            }
            this.setState((prevState) => {
              return {
                  tweedDB: prevState.tweeds.concat(newTweed),
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
