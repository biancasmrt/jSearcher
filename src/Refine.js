import React, { Component } from 'react';
import './Refine.css';
import Request from "superagent";


export default class Refine extends Component {
    constructor(props) {
      var url = `http://jservice.io/api/random/`
      super(props);
      this.state = {question: '',
                    answer: '',
                    category:'',
                    date:'',
                    levelOption: 'Select a level of difficulty to see this update.'};

      Request.get(url)
            .then((response) => {
                console.log(response)
                console.log(response.body[0])
                this.setState({
                    question: response.body[0].question,
                    answer: response.body[0].answer
                });
            });
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      setInterval(() => {
        Request.get(url)
            .then((response) => {
                console.log(response)
                console.log(response.body[0])
                this.setState({
                    question: response.body[0].question,
                    answer: response.body[0].answer,
                });
            });
      }, 5000);
    }
      
    handleChange(event) {
      this.setState({levelOption: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="Refine">
          <h1>Refine</h1>
          <h5>Level Option Example:</h5>
          <p>{ this.state.levelOption }</p>

          <div className="option" onChange={this.handleChange}>
            <label for="when">Date:&nbsp; </label>
            <input id="when" name="when" type="date" min="1964-01-01" max="2019-12-01"/>
          </div>
          <br/>
          <div className="option" onChange={this.handleChange}>
            Level of Difficulty
            <select id="diffVal">
              <option value="0">All</option>
              <option value="200">200</option>
              <option value="400">400</option>
              <option value="600">600</option>
              <option value="800">800</option>
              <option value="1000">1000</option>
            </select>
          </div>
          <div className="option">
            <form >
                Trivia Category&nbsp;
              <input type="text" name="Category" />
            </form>
          </div>
        </div>
      );
    }
}