import React from 'react';
import Routes from './Routes/routes.js';
import Header from './Components/Header';
import { BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className = "app" > 
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;