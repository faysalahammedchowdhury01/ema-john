import React from 'react';
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';
import Product from '../Product/Product';

const Products = ({ products, addToCart }) => {
  return (
    <div>
      {products === null ? (
        <Loading />
      ) : products.length === 0 ? (
        <NotFound />
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
