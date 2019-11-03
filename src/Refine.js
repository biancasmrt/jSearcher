import React, { Component } from 'react';
import './Refine.css';
import Request from "superagent";
import categories from './categories.js';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Display from './Display.js';
import { FixedSizeList } from 'react-window';
import useMediaQuery from '@material-ui/core/useMediaQuery';
 import { MuiPickersUtilsProvider, InlineDatePicker , KeyboardDatePicker,} from "@material-ui/pickers";
 import DateFnsUtils from "@date-io/date-fns";
 import { useTheme } from '@material-ui/core/styles';
 import Grid from '@material-ui/core/Grid';

import { SSL_OP_CIPHER_SERVER_PREFERENCE } from 'constants';
 import { createFilterOptions } from '@material-ui/lab/Autocomplete';

 function renderRow(props) {
  const { data, index, style } = props;

  return React.cloneElement(data[index], {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'block',
      ...style,
    },
  });
}

const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const itemCount = Array.isArray(children) ? children.length : 0;
  const itemSize = smUp ? 36 : 48;

  const outerElementType = React.useMemo(() => {
    return React.forwardRef((props2, ref2) => <div ref={ref2} {...props2} {...other} />);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={ref}>
      <FixedSizeList
        style={{ padding: 0, height: Math.min(8, itemCount) * itemSize, maxHeight: 'auto' }}
        itemData={children}
        height={250}
        width="100%"
        outerElementType={outerElementType}
        innerElementType="ul"
        itemSize={itemSize}
        overscanCount={5}
        itemCount={itemCount}
      >
        {renderRow}
      </FixedSizeList>
    </div>
  );
});

export default class Refine extends Component {
    constructor(props) {
      super(props);
      this.state = {questions: [],
                    category:'',
                    startDate:'',
                    endDate:'',
                    difficulty: '',
                    shouldOpenList: false};
      
      this.handleDifficulty = this.handleDifficulty.bind(this);
      this.handleStartDate = this.handleStartDate.bind(this);
      this.handleEndDate = this.handleEndDate.bind(this);
      this.handleCategory = this.handleCategory.bind(this);
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
                  this.setState({
                    questions: response.body
                  });
                } catch {
                  this.setState({
                    questions: []
                  })
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
        if (value.title.length > 3) {
          console.log(value);
          this.setState({category: value.id,
                        shouldOpenList: true}, this.makeRequest);
        } else {
          this.setState({category: '',
                        shouldOpenList: false}, this.makeRequest);
        }
      } catch {
        this.setState({category: '',
                      shouldOpenList: false}, this.makeRequest);
      }
    }
  
    render() {
      return (
        
        <div className="Refine">
  <Grid container className='refineAll' direction='row' justify='space-between' > 
    <Grid item>
      <Grid container className='refineOps' spacing={1} direction='column' >
            <h1>Refine</h1>
          
              <Grid item>
                <div className="option" onChange={this.handleStartDate}>
                  <label for="when">Start date:&nbsp; </label>
                  <input id="when" name="when" type="date" min="1964-01-01" max="2019-12-01"/>
                </div>
              </Grid>
              <Grid item>
                <div className="option" onChange={this.handleEndDate}>
                  <label for="when">End date:&nbsp;&nbsp;&nbsp; </label>
                  <input id="when" name="when" type="date" min="1964-01-01" max="2019-12-01"/>
                </div>
              </Grid>
              <Grid item>
                <div className="option" onChange={this.handleDifficulty}>
                  Difficulty:&nbsp;
                  <select id="diffVal">
                    <option value="">All</option>
                    <option value="200">200</option>
                    <option value="400">400</option>
                    <option value="600">600</option>
                    <option value="800">800</option>
                    <option value="1000">1000</option>
                  </select>
                </div>
              </Grid>
            <br/>
            <Grid item >
            <Autocomplete onChange={this.handleCategory}
              //style={{ width: 264 }}
              // disableListWrap
              ListboxComponent={ListboxComponent}
              options={categories}
              getOptionLabel={x => x.title}
              renderInput={params => (
                <TextField {...params} label="Select Category" variant="outlined"  />
              )}
            /> 
          </Grid>
      </Grid>
      </Grid>
      <Grid>
      &nbsp;&nbsp;
      </Grid>
    <Grid item s>
        {
          this.state.questions.map((value, index) => {
            console.log(value)
            
            var html = value.answer;
            var div = document.createElement("div");
            div.innerHTML = html;
            var answerText = div.textContent || div.innerText || "";

            html = value.question;
            div.innerHTML = html;
            var questionText = div.textContent || div.innerText || "";
            
              return <Display key={index} question={questionText} answer={answerText} category={value.category.title} difficulty={value.value} date={value.airdate.slice(0,10)}/>
           
          })
        }
        </Grid>
        </Grid>
      </div>

      );
    }
}