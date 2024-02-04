import delivery from "../assets/icons8-delivery-50.png"
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package
import { useRef } from "react";


const Header = () =>{

    const container = useRef(); // <-- for GSAP
    
    useGSAP(() => {
    // gsap code here...
    gsap.to(".Delivery",{
            x: 250,
            duration: 5,
            ease: 'power2.inOut',
            repeat: -1,
            repeatDelay: 2 
        }); 
      }, { scope: container }) // <-- scope for selector text (optional)
    
    return(
        <div>
        <div className='FreeShipping' ref={container}> 
            <img src={delivery} alt="old" width="20px" className='Delivery'/>
            <span >FREE SHIPPING ON 40€</span>
        </div>
        </div>
    )
}
export default Header;