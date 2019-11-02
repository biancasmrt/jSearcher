import React, { Component } from 'react';
import './Refine.css';
import Request from "superagent";

import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
 import Display from './Display.js';

 import { MuiPickersUtilsProvider, InlineDatePicker , KeyboardDatePicker,} from "@material-ui/pickers";
 import DateFnsUtils from "@date-io/date-fns";

const top100Films = [
  {
    "id": 11510,
    "title": "pair of dice, lost",
    "clues_count": 5
    },
    {
    "id": 11531,
    "title": "mixed bag",
    "clues_count": 5
    },
    {
    "id": 11532,
    "title": "let's \"ch\"at",
    "clues_count": 5
    },
    {
    "id": 5412,
    "title": "prehistoric times",
    "clues_count": 10
    },
    {
    "id": 11496,
    "title": "acting families",
    "clues_count": 5
    },
];

export default class Refine extends Component {
    constructor(props) {
      
      super(props);
      this.state = {question: '',
                    questions: [],
                    answer: '',
                    category:'',
                    startDate:'',
                    endDate:'',
                    difficulty: ''};
      
      this.handleDifficulty = this.handleDifficulty.bind(this);
      this.handleStartDate = this.handleStartDate.bind(this);
      this.handleEndDate = this.handleEndDate.bind(this);
      this.handleCategory = this.handleCategory.bind(this);
      // setInterval(() => {
      //   Request.get(url)
      //       .then((response) => {
      //           console.log(response)
      //           console.log(response.body[0])
      //           this.setState({
      //               question: response.body[0].question,
      //               answer: response.body[0].answer,
      //           });
      //       });
      // }, 5000);
    }

    makeRequest() {
      var url = `http://jservice.io/api/clues`
      Request.get(url)
            .query({value: this.state.difficulty})
            .query({min_date: this.state.startDate})
            .query({max_date: this.state.endDate})
            .query({category: this.state.category})
            .then((response) => {
                console.log(response.body)
                try{
                    var html = response.body[0].question;
                    var div = document.createElement("div");
                    div.innerHTML = html;
                    var questionText = div.textContent || div.innerText || "";

                  this.setState({
                    question: questionText,
                    answer: response.body[0].answer,
                    questions:response.body
                  });
                } catch {

                }
                
            });
            
    }

    handleDifficulty(event) {
      this.setState({difficulty: event.target.value}, this.makeRequest);
    }
    
    handleStartDate(event) {
      if((this.state.startDate != '') && (this.state.endDate != '')) {
        this.setState({startDate: event.target.value}, this.makeRequest);
        console.log('Test');
      } else{
        this.setState({startDate: event.target.value});
        console.log(event.target.value);
      }
      
    }
    handleEndDate(event) {
      if((this.state.endDate != '') && (this.state.endDate != '')) {
        this.setState({endDate: event.target.value}, this.makeRequest);
      } else{
        this.setState({endDate: event.target.value});
        console.log(event.target.value);
      }
    }

    handleCategory(event,value) {
      try {
        console.log(value.id);
        this.setState({category: value.id}, this.makeRequest);
      } catch {

      }
      
    }
  
    render() {
      return (
        
        <div className="Refine">
          {/* <Button variant="contained" color="primary">
            Hello World
          </Button> */}

          <h1>Refine</h1>
          {/* <h5>Level Option Example:</h5>
          <p>{ this.state.levelOption }</p> */}
          <div className="option" onChange={this.handleStartDate}>
            <label for="when">Start date:&nbsp; </label>
            <input id="when" name="when" type="date" min="1964-01-01" max="2019-12-01"/>
          </div>

          {/* <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
        /> */}

          <div className="option" onChange={this.handleEndDate}>
            <label for="when">End date:&nbsp; </label>
            <input id="when" name="when" type="date" min="1964-01-01" max="2019-12-01"/>
          </div>
          <br/>
          <div className="option" onChange={this.handleDifficulty}>
            Level of Difficulty&nbsp;
            <select id="diffVal">
              <option value="">All</option>
              <option value="200">200</option>
              <option value="400">400</option>
              <option value="600">600</option>
              <option value="800">800</option>
              <option value="1000">1000</option>
            </select>
          </div>
          <br/>
          <Autocomplete onChange={this.handleCategory}
            options={top100Films}
            getOptionLabel={x => x.title}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} label="Combo box" variant="outlined" fullWidth />
            )}
          /> 

        {
          this.state.questions.map((value, index) => {
            console.log(value)
            return <Display key={index} question={value.question} answer={value.answer} category={value.category.title} difficulty={value.value} date={value.airdate}/>
          })
        }
        </div>
      );
    }
}