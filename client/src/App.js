import React from 'react';
import Players from './players';
import './App.css';
import Navbar from './navbar';
import useDarkMode from './useDarkMode';
import useLocalStorage from './useLocalStorage';

function App() {
  return (
    <div className="App">
    <h2>Players</h2>
    <div>
      <Navbar/>
      <Players/>
    </div>
  </div>
);
}
export default App;