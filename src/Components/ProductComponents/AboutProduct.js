import { useNavigate, useParams } from "react-router";
import data from "../../data/data";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import "./product.css"



const AboutProduct = ({product}) =>{
    const navigate = useNavigate();
    const {title} = useParams();

    const [quantity, setQuantity] = useState(1) //<-- 1 -потому что мы хотим, чтобы пользователь
    //мог добавлять товары, начиная с 1. Чтобы там не было минуса

    const dispatch = useDispatch();


    return(
        <div>

            {data.filter( (p) => p.title === title).map((item, index) => {
                return(
                    <div key={index} className="AboutProduct" >
                        <div className="imgAndButton">
                        <button className="ButtonGoBack linkHoverCheckout " onClick={()=> navigate(-1)} >Go Back</button>

                        <img src={item.img} alt="old" width="300px" />
                        </div>
                        <div className="ProductDescription">
                            <h2> {item.name} </h2>
                            <div className="Sort" >
                                <p> {item.category} </p>   
                                <p>Brand: {item.brand} </p>
                                <p>Format: {item.format} </p>
                                <p>Created for: {item.type} </p>
                                <p>Price: {item.price}€ </p>
                                <p>Description: {item.description} </p>
                            </div>
                            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
                             {/* не забыть dispatch и import addItemToCart  */}
                            <button className="linkHoverCheckout" onClick={ () => {dispatch(addItemToCart({product: item, quantity}))} } >ADD TO CART</button>
                        </div>



                    </div>
                )
            })}
        </div>
    )
}
export default AboutProduct;