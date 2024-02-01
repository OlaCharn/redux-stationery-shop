//тут отображение названия и начального количества

import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const Product = ( {product} ) =>{

    const [quantity, setQuantity] = useState(1) //<-- 1 -потому что мы хотим, чтобы пользователь
    //мог добавлять товары, начиная с 1. Чтобы там не было минуса

    const dispatch = useDispatch();

    return(
        <div className="ProductsAll">
        <div className="ProductCart">
            <Link to={`/about/${product.title}`} >
            <img src={product.img} alt="old" width="200px" height="270px"  />
            </Link>
            <h2> {product.name} </h2>
            <p> Price: {product.price}€ </p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            {/* не забыть dispatch и import addItemToCart  */}
            <button className="linkHoverCheckout" onClick={ () => {dispatch(addItemToCart({product, quantity}))} } >ADD TO CART</button>
        </div>
        </div>
    )
}
export default Product;