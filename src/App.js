import React from 'react';
import './App.css';
import Dinner from './dinner.js';
function App() {
  return (
    <div className='App'>
    <Header className= 'App-header'>
    <Dinner dishName="Chicken karahi" sweetDish="Kheer" />
    <hr/>
    <Dinner dishName="nihari" sweetDish="rasmilai" />
    <hr/>
    <Dinner dishName="Chicken biryani" sweetDish="gulabjamun" />
    <hr/>
    <Header/>
    </div>
  );
  
}

export default App;
