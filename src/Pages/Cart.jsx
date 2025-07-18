import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const increaseQuantity = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    updateCart(updated);
  };

  const decreaseQuantity = (index) => {
    const updated = [...cartItems];
    updated[index].quantity -= 1;

    if (updated[index].quantity === 0) {
      updated.splice(index,1);
    }
    updateCart(updated);
  };

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item,index) => (
            <div className="cart-item" key={index}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <p>
                  <strong>{item.name}</strong> (Size: {item.size})
                </p>
                <p>Price: ₹{item.price}</p>
                <div className="qty-controls">
                  <button onClick={() => decreaseQuantity(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(index)}>+</button>
                </div>
                <p>Subtotal: ₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <hr />
          <h3>Total: ₹{total}</h3>
          <button className="clear-cart-btn" onClick={handleClearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
