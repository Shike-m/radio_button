import React,{ useState } from 'react';
import RadioButton from './RadioButton';
import logo from './logo.svg';
import './App.css';

function App() {
  const [color,setColor]=useState('black')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <form>
        <RadioButton  >
            Yes
         </RadioButton>
         <RadioButton>
            No 
         </RadioButton>
         <RadioButton>
            <strong style={{margin:'0 3px'}}>Blue</strong> color
         </RadioButton>
      </form>
      <div>
        This is a sample display.
      </div>
    </div>
  );
}

export default App;
