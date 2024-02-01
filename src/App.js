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
import { useEffect  } from 'react';
import { useSelector } from 'react-redux';
import iconBag from "./assets/icons8-shopping-bag-50.png" 
import AboutProduct from './Components/ProductComponents/AboutProduct';
import Footer from './Components/Footer';
import gsap from 'gsap';
import delivery from "./assets/icons8-delivery-50.png"




function App() {
  const totalItems = useSelector((state) => state.cart.totalItems);

  useEffect(() => {
    // Анимация подрагивания
    const tl = gsap.timeline({ repeat: -1, yoyo: true, duration: 0.2 });
    tl.to('.imgCart', { x: 5 });

    gsap.from('.Delivery', { x: -400, duration: 5, ease: 'power2.inOut', repeat: -1, repeatDelay: 2 });
  }, []); // Запускаем анимации при монтировании компонента


  


  
  return (
    <div className="App">
      <div className='FreeShipping' > 
      <span >FREE SHIPPING ON 40€</span>
      <img src={delivery} alt="old" width="20px" className='Delivery'/>

      </div>

      <Router>

        <nav  >
          <Link to="/" className='link linkHover ' >Shop</Link>
          <Link to="/contacts" className='link linkHover' >CONTACTS</Link>
          <Link to="/cart" className='link cart' > 
          <img className="imgCart" src={iconBag} alt="old" width="35px" />   
          <div className='ringCart'> { totalItems > 0 && `${totalItems}` }</div>           
          </Link>
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

/*       <div className='block'>
<Cart />

</div>
*/
