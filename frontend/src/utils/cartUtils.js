const addDecimal = (num) => {
  return num.toFixed(2);
};

export const updateCart = (state) => {
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
};
