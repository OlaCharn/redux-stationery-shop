import iconBag from "../assets/icons8-shopping-bag-50.png" 
import gsap from 'gsap';
import { useSelector } from 'react-redux';
import { useEffect  } from 'react';


const ShoppingBag =()=>{
    const totalItems = useSelector((state) => state.cart.totalItems);

    useEffect(() => {
        // Анимация подрагивания
        const tl = gsap.timeline({ repeat: -1, yoyo: true, duration: 0.2 });
        tl.to('.imgCart', { x: 5 });
    
      }, []); // Запускаем анимацию при монтировании компонента
    
    

    return(
        <div className='link cart'>
          <img className="imgCart" src={iconBag} alt="old" width="35px" />   
          <div className='ringCart'> { totalItems > 0 && `${totalItems}` }</div>           
        </div>
    )
}
export default ShoppingBag;