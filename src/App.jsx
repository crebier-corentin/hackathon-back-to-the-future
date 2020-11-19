import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Artist from './pages/Artist';
import Order from './pages/Order';
import Column from './components/Column';
import ColumnRight from './components/ColumnRight';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Column />
      <ColumnRight />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/artist/:name" component={Artist} />
        <Route path="/order/:name" component={Order} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
