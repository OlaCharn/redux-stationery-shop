import './App.css';
import AllProducts from './Components/ProductComponents/AllProducts';
import Cart from './Components/Cart/Cart';

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contacts from './Components/Contacts';

import { useSelector } from 'react-redux';
import iconBag from "./assets/icons8-shopping-bag-50.png" 
import AboutProduct from './Components/ProductComponents/AboutProduct';




function App() {
  const totalItems = useSelector((state) => state.cart.totalItems);
  return (
    <div className="App">
      <Router>

        <nav  >
          <Link to="/" className='link' >Shop</Link>
          <Link to="/contacts" className='link' >CONTACTS</Link>
          <div className='link cart' >FREE SHIPPING ON 40€ </div>
          <Link to="/cart" className='link cart' > 
          <img className="imgCart" src={iconBag} alt="old" width="35px" />   
          <div> { totalItems > 0 && `${totalItems}` }</div>           
          </Link>
        </nav>

        <Routes>
          <Route path='/' element={ <AllProducts/> } />
          <Route path="/contacts" element={ <Contacts /> } />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about/:title" element={ <AboutProduct /> } />
        </Routes>




      </Router>
    </div>
  );
}

export default App;

/*       <div className='block'>
<Cart />

</div>
*/
