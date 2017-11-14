import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor (props) {
    super (props);

    this.state = { term: '' };

    // If you do not have this line, you will get an error message in the console
    // saying 'setState' is not defined.
    // What is happening on this line is: take the existing function, bind it to "this",
    // and replace the existing function with it.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value)
    //"this" is not the actual component
    this.setState({ term: event.target.value})
  }


  onFormSubmit(event) {
    // If user tries to submit the form, prevent the submission
    event.preventDefault();

    //Go fetch weather data
    this.props.fetchWeather(this.state.term);
    //after term is submitted, clear the input field
    this.setState({ term:'' });
  }

  render() {
    return (
      // On the submission of the form, call onFormSubmit method.
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value = {this.state.term}
          // This line just says, if there is a change, run oninputChange function.
          // If passing a callback around as a function (like the onInputChange() event handler)
          // and the callback has a reference to "this",
          // you need to bind the context (line 13 above).
          // Or...use fat arrow function.
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({ fetchWeather }, dispatch);
}

//null is first argument because no state is needed here,
//and mapDispatchToProps has to be the second arg no matter what.
//This functions gives us access to this.props.featchWeather in our methods above.
export default connect(null, mapDispatchToProps)(SearchBar);
