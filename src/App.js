import React from 'react';
import Header from './Header';
import Refine from './Refine';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{flexDirection : 'row'}} >
      <Display/>
      <Refine />
      </div>
    </div>
  );

}

export default App;

