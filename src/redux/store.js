import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/carteSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});
