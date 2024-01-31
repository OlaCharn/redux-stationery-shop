//это корзина
//мы хотим, чтобы к нему добавился еще компонент, который будет содержать сам продукт
//мы соединяем корзину с cartSlice
//getCartItems из cartSlice мы сделали специально для того, чтобы видеть,
// что находится в нашей корзине

import { useSelector } from "react-redux"
import { getCartItems, getTotalPrice, getTotalItems } from "../../redux/cartSlice"
import Cartitem from "./Cartitem";
import Swal from "sweetalert2";


const Cart = () =>{

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalItems = useSelector(getTotalItems);

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
            <h2>TOTAL: {totalPrice}€ </h2>
            <h2>SHIPPING: {totalPrice > 40 ? "Free" : "7€"} </h2>
            <p> Total Items: {totalItems} </p>
            {cartItems.map(cartItem => <Cartitem key={cartItem.id} cartItem={cartItem} /> )} {/* ---> Cartitem.js */}
            <button onClick={checkout} >CHECKOUT</button>
        </div>
    )
}

export default Cart;