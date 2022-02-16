import React from "react";
import Product from "../Product/Product";

const Products = ({ products, addToCart }) => {
  return (
    <div>
      {products.map((product) => (
        <Product key={product.key} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
