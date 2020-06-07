import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
