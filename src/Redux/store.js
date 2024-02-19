import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "../slices/slices/wishlistSlice";
import cartSlice from "../slices/slices/cartSlice";

const store=configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }
})
export default store;