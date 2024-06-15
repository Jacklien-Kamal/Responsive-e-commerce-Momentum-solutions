import { createSelector, createSlice } from "@reduxjs/toolkit";

const cart = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
  cartItems: cart,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItem: (state, action) => {
      state.cartItems = action.payload;
      localStorage.setItem('cart', JSON.stringify(state.cartItems)); // Update localStorage
    },
    addToCart: (state, action) => {
      const cartItem = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (cartItem) {
        cartItem.qty++;
      } else {
        state.cartItems.push({
          product: action.payload,
          qty: 1,
        });
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems)); // Update localStorage
    },
    removeFromCart: (state, action) => {
      const cartItem = state.cartItems.find(
        (el) => el.product.id === action.payload.id
      );
      if (cartItem) {
        cartItem.qty--;
        if (cartItem.qty === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product.id !== action.payload.id
          );
        }
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems)); // Update localStorage
    },
  },
});

// Selectors
const selectCartItems = (state) => state.cart.cartItems;

export const productQtyInCartSelector = createSelector(
  [selectCartItems, (_, productId) => productId],
  (cartItems, productId) =>
    cartItems.find((item) => item.product.id === productId)?.qty || 0
);

export const totalCartItemsSelector = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, curr) => total + curr.qty, 0)
);

export const totalPriceSelector = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, curr) => total + curr.qty * curr.product.price, 0)
);

export const { setCartItem, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
