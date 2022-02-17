import React from 'react';
import Rating from 'react-rating';
import greyStar from '../../assets/images/star-grey.png';
import yellowStar from '../../assets/images/star-yellow.png';

const Product = ({ product, addToCart }) => {
  const { name, img, seller, price, star } = product;

  return (
    <div className="product">
      <div className="card border-0 rounded my-4 p-3">
        <div className="row g-0">
          <div className="col-md-5 text-center">
            <img src={img} className="img-fluid rounded-start" alt={name} />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text mt-0 mb-3 text-muted">By: {seller}</p>
              <p className="card-text mb-0">Price: {price}</p>
              <div className="mb-3 mt-2">
                <Rating
                  emptySymbol={
                    <img
                      style={{ width: '20px' }}
                      src={greyStar}
                      alt="review"
                      className="icon"
                    />
                  }
                  fullSymbol={
                    <img
                      style={{ width: '20px' }}
                      src={yellowStar}
                      alt="review"
                      className="icon"
                    />
                  }
                  initialRating={star}
                  readonly
                />
              </div>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-warning"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
