import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const found = state.items.find(p => p.id === product.id);

      if (found) {
        found.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    increaseQty: (state, action) => {
      const item = state.items.find(p => p.id === action.payload);
      if (item) item.quantity++;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(p => p.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload);
    }
  }
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;
