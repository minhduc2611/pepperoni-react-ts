import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav-bar';
import PizzaList from './components/pizza-list';

function App() {
  return (
    <div className="App">
      <NavBar />
      <PizzaList />
    </div>
  );
}

export default App;
