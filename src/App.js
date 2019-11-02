import React from 'react';
import Header from './Header';
import Refine from './Refine';
import Display from './Display';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth='md'>
        <Refine />
      </Container>
      
    </div>
  );

}

export default App;

