import React from 'react';
import './App.css';
import LeftFrame from './components/LeftFrame';
import RightFrame from './components/RightFrame';

function App() {
  return (
    <div className="App">
      <div className="container">
        <LeftFrame />
        <RightFrame />
      </div>
    </div>
  );
}

export default App;
