import React, {Component} from React;

class AddTweedForm extends Component {
  render() {
    return(
      <form
       className="add-tweed-form"
       onSubmit={this.props.handleTweedSubmit}
      >
      <input
          type="text"
          value={this.props.inputTextValue}
          name="text"
          placeholder="Add you Tweed here!"
          onChange={this.props.handleInputTextChange}
      /><br/>

      <button id="submit"> Add Tweed!</button>
    </form>
    );
  }
}

export default addTweedForm;
