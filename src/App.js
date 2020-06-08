import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import SearchInput from './components/molecules/SearchInput';
import './App.scss';

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
