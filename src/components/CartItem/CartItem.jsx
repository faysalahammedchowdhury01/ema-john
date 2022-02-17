import React from 'react';
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import './CartItem.css';

const CartItem = ({ cartItem, handleCartItemQuantity, removeItemFromCart }) => {
  const { quantity, img, name, price } = cartItem;

  return (
    <>
      <div className="rounded border row gx-0 justify-content-between align-items-center  bg-white p-2 my-3">
        <div className="col-2">
          <div className="d-flex flex-column bg-white border rounded">
            <button
              onClick={() => handleCartItemQuantity(cartItem, 'plus')}
              className="btn-style"
            >
              <AiOutlinePlus />
            </button>
            <p className="mb-0 text-center text-bold">
              <b>{quantity}</b>
            </p>
            <button
              onClick={() => handleCartItemQuantity(cartItem, 'minus')}
              className="btn-style"
            >
              <AiOutlineMinus />
            </button>
          </div>
        </div>
        <div className="col-8 px-2">
          <div className="d-flex align-items-center">
            <img style={{ width: '70px' }} src={img} alt={name} />
            <div className="cart-title ms-2">
              <h6 className="cart-title">{name}</h6>
              <p className="d-flex align-items-center mb-0">
                <b>${price}</b>
                <b className="mx-2">
                  <ImCross style={{ fontSize: '10px' }} />
                </b>
                <b>{quantity}</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 text-end">
          <button
            onClick={() => removeItemFromCart(cartItem)}
            className="btn border"
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
