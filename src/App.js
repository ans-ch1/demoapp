import React from 'react';
import './App.css';
import Dinner from './dinner.js';
function App() {
  return (
    <div className='App' >
    <Dinner Name="Ans Choudhary" new="computer" subject='computer' />
    <hr/>
    <Dinner Name="Ans Choudhary" new="information technology" subject='netwoking' />
    <hr/>
    <Dinner Name="Ans Choudhary" new="earning" subject='business' />
    <hr/>
    </div>
  );
  
}

export default App;
