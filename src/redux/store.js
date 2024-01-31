//переходим на сайт https://redux-toolkit.js.org/tutorials/quick-start
//там ищем раздел store Add Slice Reducers to the Store

import { configureStore } from '@reduxjs/toolkit'
import ourProducts from "./productSlice"
import cart from "./cartSlice"

export const store = configureStore({
    reducer: {
        ourProducts:ourProducts,
        cart: cart

      //убираеи вот этоcounter: counterReducer,
    },
 })