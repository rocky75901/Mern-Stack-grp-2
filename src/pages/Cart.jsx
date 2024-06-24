import React, { useState, useEffect } from 'react';
import './Cart.css';
import AllProducts from "./Admin/AllProducts"

const allProducts = AllProducts.slice(0,12);

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState('');

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 0 }];
      }
    });
    showNotification('Item added to cart successfully!');
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div className="app-cart">
      {notification && <div className="notification">{notification}</div>}



      <div className="cart-container-cart">
        {cartItems.length === 0 ? (
          <div className="cart-empty-cart">
            <h2>No items in the cart</h2>
            <a href="/shop" className="go-to-shop-cart">
              Go to Shop
            </a>
          </div>
        ) : (
          <div>
            <h2>Your Cart</h2>
            {cartItems.map((item) => (
              <div className="cart-item-cart" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details-cart">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="cart-item-controls-cart">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
            <button className="order-button-cart">Place Order</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;