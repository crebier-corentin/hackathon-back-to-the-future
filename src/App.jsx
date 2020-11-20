import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Artist from './pages/Artist';
import Order from './pages/Order';
import Column from './components/Column';
import ColumnRight from './components/ColumnRight';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

/**
 * Scroll to top of page on route change
 */
function ScrollToTop() {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop />

      <Column />
      <ColumnRight />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:query?" component={Search} />
        <Route path="/artist/:name" component={Artist} />
        <Route path="/order/:name" component={Order} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
