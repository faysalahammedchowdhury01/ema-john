import React from "react";

const Checkout = ({ cart }) => {
  const total = cart.reduce((prev, curr) => {
    return prev + curr.price * curr.quantity;
  }, 0);

  return (
    <div>
      <button
        style={{ fontWeight: "500" }}
        className='btn btn-primary d-block w-100 border-0 text-center'
      >
        Checkout ({total.toFixed(2)} USD)
      </button>
    </div>
  );
};

export default Checkout;
