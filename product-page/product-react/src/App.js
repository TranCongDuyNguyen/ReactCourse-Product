import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import './App.css';
import TopBarMenu from './components/TopMenuBar';
import Product from './pages/Product';
import { CartProvider } from './contexts/CartItems';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Router>
          <div className="App">
            <TopBarMenu/>
            <Route path = "/products/" exact component = {Product}/>
          </div>
        
        </Router>
      </CartProvider>
    );
  }
}

export default App;
