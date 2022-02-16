import React from 'react';
import Product from '../Product/Product';

const Products = ({ products, addToCart }) => {
  return (
    <div>
      {products.length === 0 ? (
        <div>Not Found!</div>
      ) : (
        <div>
          {products.map((product) => (
            <Product
              key={product.key}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
