//тут мы хотим отобразить количество товаров корзине

import { useDispatch } from "react-redux";
import { removeItemFromCart, updateCartItemQuantity  } from "../../redux/cartSlice";
import data from "../../data/data"
import ChangeQuantity from "../Cart/ChangeQuantity";
import { Link } from "react-router-dom";
import "./cart.css"



const Cartitem = ( {cartItem} ) =>{

    //cartItem - из cartSlice.js

    const products = data.find(item => item.id === cartItem.productId);
    const dispatch = useDispatch()

    const handleQuantityChange = (newQuantity) => {
        dispatch(updateCartItemQuantity({ cartItemId: cartItem.id, newQuantity }));
        };

    return(
        <div className="item">
            <Link to={`/about/${products.title}`} >

            <img src={products.img} alt="old" width="80px" height="120px"  />
            </Link>
            <p className="NameProduct"> {products.name} </p>
            <p className="NameProduct" > {products.format} </p>

            <ChangeQuantity
                    quantity={cartItem.quantity}
                    setQuantity={handleQuantityChange}
                    cartItemId={cartItem.id} // Передаем cartItemId в ChangeQuantity
            />
            <p className="NameProduct">{products.price * cartItem.quantity}€ </p>
            <span onClick={()=>dispatch(removeItemFromCart( {cartItemId: cartItem.id} ))} >
            <img className="icon" alt="old" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
            </span>

        </div>
    )
}

export default Cartitem;