import React from 'react';
import Routes from './Routes/routes.js';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    <div className = "App" > 
      <Header />
      <Routes />
    </div>
  );
}

export default App;