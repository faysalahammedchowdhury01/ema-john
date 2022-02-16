import React from "react";
import CartItem from "../CartItem/CartItem";
import Checkout from "../Checkout/Checkout";

const Cart = ({ cart, handleCartItemQuantity, removeItemFromCart }) => {
  return (
    <div
      style={{ position: "sticky", top: "50px" }}
      className="my-3 p-3 bg-light text-dark"
    >
      {cart.length === 0 ? (
        <b className="text-center d-block">Cart is empty!</b>
      ) : (
        <div>
          <h4 className="mb-4">{cart.length} Item(s)</h4>
          {cart.map((cartItem) => (
            <CartItem
              key={cartItem.key}
              handleCartItemQuantity={handleCartItemQuantity}
              cartItem={cartItem}
              removeItemFromCart={removeItemFromCart}
            />
          ))}
          <Checkout cart={cart} />
        </div>
      )}
    </div>
  );
};

export default Cart;
