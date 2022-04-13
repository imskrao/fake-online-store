import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './containers/Cart';

import Header from "./containers/Header";
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
