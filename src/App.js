import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';



function App() {
  return (
    <div className="App">
    <Nav></Nav>
    <About></About>

    <Resume></Resume>
    <Portfolio></Portfolio>

  </div>
  );
}

export default App