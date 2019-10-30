import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import pic from './images/logo.png'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          jSearcher   
        </h1>
      </header>
      
    <body>
      <div class="refine">
        <h1>Refine</h1>
        <div class="option">
        <label for="when">Date:&nbsp; </label>
        <input id="when" name="when" type="date" min="1964-01-01" max="2019-12-01"/>
        <br/>
        </div>
        <div class="option">
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
        <div class="option">
          <form >
              Trivia Category&nbsp;
            <input type="text" name="Category" />
          </form>
        </div>
      </div>
    </body>
    <script type="application/javascript">
    var e = document.getElementById("diffVal");
    var diffValue = e.options[e.selectedIndex].value;
  </script>


    </div>
  );
}
export default App;

