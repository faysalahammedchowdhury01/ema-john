import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import CartItem from '../CartItem/CartItem';
import Checkout from '../Checkout/Checkout';
import classes from './Cart.module.css';

const Cart = ({ cart, handleCartItemQuantity, removeItemFromCart }) => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    showCart
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [showCart]);

  return (
    <>
      <button className={`${classes.cartBtn} d-lg-none`} onClick={toggleCart}>
        {showCart ? <ImCross /> : <FaShoppingCart />}
      </button>
      <div
        onClick={toggleCart}
        className={`${showCart ? 'd-block' : 'd-none d-lg-block'} ${
          classes.cart
        } `}
      >
        {cart.length === 0 ? (
          <b
            onClick={(e) => e.stopPropagation()}
            className={`${classes.cardBody} my-3 p-3 bg-light text-dark text-center d-block`}
          >
            Cart is empty!
          </b>
        ) : (
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${classes.cardBody} my-3 p-3 bg-light text-dark`}
          >
            <h4 className="mb-4">{cart.length} Item(s)</h4>
            <div className={classes.products}>
              {cart.map((cartItem) => (
                <CartItem
                  key={cartItem.key}
                  handleCartItemQuantity={handleCartItemQuantity}
                  cartItem={cartItem}
                  removeItemFromCart={removeItemFromCart}
                />
              ))}
            </div>
            <Checkout cart={cart} />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
