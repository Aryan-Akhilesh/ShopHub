import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimal = (num) => {
  return num.toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x._id === item._id);

      if (existingItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existingItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      //items price
      state.itemsPrice = addDecimal(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      );

      //shipping price(No shipping fee above $100)
      state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 10);

      //tax price
      state.taxPrice = addDecimal(0.15 * state.itemPrice);

      //Total price
      state.totalPrice = addDecimal(
        Number(state.itemPrice) +
          Number(state.shippingPrice) +
          Number(state.taxPrice)
      );

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
