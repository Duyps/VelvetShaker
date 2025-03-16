import './App.css';
import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/about/About';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import Shop from './components/shop/Shop';
import ProductDetail from './components/shop/ProductDetail';
import Header from './components/common/header/Header'
function App() {
  useEffect(() => {
    // Cuộn lên đầu trang khi route thay đổi
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/product/:id' component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
