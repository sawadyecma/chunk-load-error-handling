import React from "react";

export const CartPage = () => {
  if (process.env.NODE_ENV !== "anything") {
    throw new Error("cart page has something wrong");
  }

  return (
    <div>
      <h1>Cart</h1>
      <p>Cart is empty</p>
    </div>
  );
};
export default CartPage;
