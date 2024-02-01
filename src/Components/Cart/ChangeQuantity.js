//тут кнопки, которые меняют количество
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItemQuantity } from '../../redux/cartSlice';

const ChangeQuantity = ( {quantity, setQuantity, cartItemId} ) =>{
    //props пришли к нам из Product.js и Cartitem.js

    const dispatch = useDispatch();

    const addQuantity = () =>{
        const newQuantity = quantity +1;
        setQuantity(newQuantity);
        dispatch(updateCartItemQuantity({ cartItemId, newQuantity })); //<-- для апдейта корзины
    }

    const removeQuantity = () =>{
        if(quantity <= 1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity);
        dispatch(updateCartItemQuantity({ cartItemId, newQuantity })); //<-- для апдейта корзины
    }

    return(
        <div>
            <button className='ChangeQuantity' onClick={removeQuantity} > - </button>
            <span> {quantity} </span>
            <button className='ChangeQuantity' onClick={addQuantity}> + </button>

        </div>
    )
}
export default ChangeQuantity;