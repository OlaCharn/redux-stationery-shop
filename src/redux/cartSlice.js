//отвечает за корзину
//при нажатии add cart товар должен переходить в корзину
//делаем по аналогии с cartSlice
// 1 что делаем - импортируем createSlice

// const timeId = new Date().getTime() + id: timeId, 
//мы используем это для того, чтобы при нажатии на удаление из корзины одного товара
// не удалялись остальные.
// путем присвоения id с датой присвоения мы заставляем различать при удалении

import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalItems: 0
        },
    reducers: {
        addItemToCart: (state, action) =>{
            const timeId = new Date().getTime() //см. выше
            state.cartItems.push({
                id: timeId, //см.выше
                productId:action.payload.product.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.product.price,
                product: action.payload.product, // Добавляем данные о продукте, чтобы корректно срабатывал +/- в корзине
            });
            // Увеличиваем общее количество товаров в корзине
            state.totalItems += action.payload.quantity;
        },
        removeItemFromCart: (state, action) => {
            const removedItem = state.cartItems.find(
              (cartItem) => cartItem.id === action.payload.cartItemId
            );
      
            if (removedItem) {
              state.totalItems -= removedItem.quantity;
              state.cartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.cartItemId
              );
            }
          },
          updateCartItemQuantity: (state, action) => {
            const { cartItemId, newQuantity } = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === cartItemId);
      
            if (cartItem) {
              state.totalItems += newQuantity - cartItem.quantity;
              cartItem.quantity = newQuantity;
              cartItem.totalPrice = newQuantity * cartItem.product.price;
            }
          },
        },
});

//это логика для общей суммы заказа
export const getTotalPrice= state => {
    return state.cart.cartItems.reduce((total,cartItems) => {
        return cartItems.totalPrice + total
    },0) //потому что счет идет с нуля
}

//это логика для количества
export const getTotalItems = (state) => state.cart.totalItems; 

export const getCartItems= state => state.cart.cartItems;
export const {addItemToCart, removeItemFromCart , updateCartItemQuantity} = slice.actions;
export default slice.reducer;

/*
        removeItemFromCart: (state, action) =>{
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId //<-- у нас попадут в новый 
                //массив только те элементы, которые соответствуют этому условию
            );

            
            state.totalItems = state.cartItems.reduce(
                (total, cartItem) => total + cartItem.quantity,
                0
              );
        }

*/