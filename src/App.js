import './App.css';
import AllProducts from './Components/ProductComponents/AllProducts';
import Cart from './Components/Cart/Cart';

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import Contacts from './Components/Contacts';
import AboutProduct from './Components/ProductComponents/AboutProduct';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ShoppingBag from './Components/ShoppingBag';




function App() {
  
  return (
    <div className="App">

      <Header />

      <Router>
        <nav  >
          <Link to="/" className='link linkHover ' >Shop</Link>
          <Link to="/contacts" className='link linkHover' >CONTACTS</Link>
          <Link to="/cart" className='link cart' ><ShoppingBag /></Link>
        </nav>

        <Routes>
          <Route path='/' element={ <AllProducts/> } />
          <Route path="/contacts" element={ <Contacts /> } />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about/:title" element={ <AboutProduct /> } />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

