import React from 'react';
import './App.css';
import Dinner from './dinner.js';
function App() {
  return (
    <div color='grey' className='App'>
    <Dinner dishName="Chicken karahi" sweetDish="Kheer" />
    <hr/>
    <Dinner dishName="nihari" sweetDish="rasmilai" />
    <hr/>
    <Dinner dishName="Chicken biryani" sweetDish="gulabjamun" />
    <hr/>
    </div>
  );
  
}

export default App;
