import React from 'react';
import Header from './Header';
import Refine from './Refine';

function App() {
  return (
    <div className="App">
      <Header />
      <Refine />
      <script type="application/javascript">
        var e = document.getElementById("diffVal");
        var diffValue = e.options[e.selectedIndex].value;
      </script>
    </div>
  );

}

export default App;

