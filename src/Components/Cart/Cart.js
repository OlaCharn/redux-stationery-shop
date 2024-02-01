//это корзина
//мы хотим, чтобы к нему добавился еще компонент, который будет содержать сам продукт
//мы соединяем корзину с cartSlice
//getCartItems из cartSlice мы сделали специально для того, чтобы видеть,
// что находится в нашей корзине

import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice, getTotalItems } from "../../redux/cartSlice"
import Cartitem from "./Cartitem";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";



const Cart = () =>{

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalItems = useSelector(getTotalItems);
    const navigate = useNavigate();


    const checkout = () =>{
        Swal.fire({
            title: "Ooops!",
            text: "Thank you, for choosing our market! Here must be form for payment, but it's not real shop",
            icon: "warning",
            confirmButtonColor: "#dfa909",
          });
    }

    

    return(
        <div>
            <h2>Shopping bag</h2>
            {cartItems.map(cartItem => <Cartitem key={cartItem.id} cartItem={cartItem} /> )} {/* ---> Cartitem.js */}
            <div className="Total">
                <h3  >Total Items: {totalItems} </h3>
                <h2 >Subtotal: {totalPrice}€ </h2>
                <h2  >Shipping: {totalPrice > 40 ? "Free" : "7€"} </h2>
                <h2 >TOTAL: {totalPrice > 40 ? totalPrice : totalPrice+7}€ </h2>
            </div>
            <div className="Checkout">
                <button className="CheckoutContinue" onClick={()=> navigate(-1)} >continue shopping</button>
                <button className=' linkHoverCheckout' onClick={checkout} >CHECKOUT</button>
            </div>

        </div>
    )
}

export default Cart;