import React,{ useState } from 'react';
import RadioButton from './RadioButton';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Div = styled.div`
  position: absolute;
  top: 36px;
  width: 100%;
  margin: 10px;
  padding: 10px;
  border-top: 2px solid #f6f6f6;
  color: white;
  background: ${props=>props.backColor}
`;

function App() {
  const [color, setColor] = useState('black')
  
  const onSelected = (value) => {
    setColor(value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <form>
        <RadioButton color="yellow"
          onChange={onSelected}
        >
          <label htmlFor="yellow" >Yellow</label>
          {
            (color === "yellow") && <Div backColor="yellow">
              This is Yellow display area.
              </Div>
            }
         </RadioButton>
         <RadioButton color="red" onChange={onSelected}>
          <label htmlFor="red" >Red</label>
          {
            (color === "red") && <Div backColor="red">
              This is red display area.
              </Div>
            }
         </RadioButton>
         <RadioButton color="blue" onChange={onSelected}>
          <label htmlFor="blue" ><strong style={{ margin: '0 3px' }}>Blue</strong> color</label>
          {
            (color === "blue") && <Div backColor="blue">
              This is blue display area.
              </Div>
            }
         </RadioButton>
      </form>
    </div>
  );
}

export default App;
