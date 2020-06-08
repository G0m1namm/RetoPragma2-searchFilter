import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import SearchInput from './components/molecules/SearchInput';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search">
      <SearchInput />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App;
