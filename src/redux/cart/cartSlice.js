import { createSlice } from '@reduxjs/toolkit';

  const initialState = {
    cart: [],
  };
  
  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.name === action.payload.name);
            if (itemInCart) {
              itemInCart.quantity++;
            } else {
              state.cart.push({ ...action.payload, quantity: 1 });
            }
          },
          cleanCart: (state) => {
              state.cart = [];    
          },
          incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.name === action.payload);
            item.quantity++
          },
          decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.name === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
          },
          removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.name !== action.payload);
            state.cart = removeItem;
          },
      },
       
  });
  
  export default cartSlice.reducer;
  export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    cleanCart
  } = cartSlice.actions;