import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import Search from '../Search/Search';

const Shop = () => {
  // states
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(null);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cartEma')) || []
  );

  // get data from localhost
  localStorage.setItem('cartEma', JSON.stringify(cart));

  // get json data from api
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON'
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayedProducts(data);
      });
  }, []);

  // add to cart
  const addToCart = (product) => {
    // check product is exist on cart or not
    const exist =
      cart.filter((cartItem) => cartItem.key === product.key).length === 0
        ? false
        : true;

    // clone cart
    const newCart = [...cart];

    // clone product obj (can't change real product object)
    const productClone = { ...product };

    // if doesn't exist product on cart then add product to cart
    if (!exist) {
      productClone['quantity'] = 1;
      newCart.push(productClone);

      // toast
      toast.success('Successfully added to cart!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    // if exist then update product quantity
    else {
      const cartItemIndex = newCart.findIndex(
        (item) => item.key === productClone.key
      );
      newCart[cartItemIndex].quantity = newCart[cartItemIndex].quantity + 1;
    }

    // finally update cart state
    setCart(newCart);
  };

  // handle cart item quantity
  const handleCartItemQuantity = (cartItem, action) => {
    const newCart = [...cart];
    const cartItemIndex = newCart.findIndex(
      (item) => item.key === cartItem.key
    );
    if (action === 'plus') {
      newCart[cartItemIndex].quantity = newCart[cartItemIndex].quantity + 1;
    } else {
      if (newCart[cartItemIndex].quantity === 1) return;
      newCart[cartItemIndex].quantity = newCart[cartItemIndex].quantity - 1;
    }
    setCart(newCart);
  };

  // remove product from cart
  const removeItemFromCart = (item) => {
    const newCart = [...cart];
    const cartItemIndex = newCart.findIndex(
      (cartItem) => cartItem.key === item.key
    );
    newCart.splice(cartItemIndex, 1);
    setCart(newCart);
  };

  // handle search
  const handleSearch = (search) => {
    const searchedProducts = products.filter((product) => {
      return (
        product.name.toUpperCase().includes(search.toUpperCase()) ||
        product.seller.toUpperCase().includes(search.toUpperCase())
      );
    });
    setDisplayedProducts(searchedProducts);
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Search handleSearch={handleSearch} />
          </div>
          <div className="col-lg-8">
            <Products products={displayedProducts} addToCart={addToCart} />
          </div>
          <div className="col-lg-4">
            <Cart
              cart={cart}
              handleCartItemQuantity={handleCartItemQuantity}
              removeItemFromCart={removeItemFromCart}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
