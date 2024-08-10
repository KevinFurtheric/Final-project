import React, { useState, useEffect } from "react";
import "../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the backend or localStorage
    const items = []; // Replace with actual fetch logic
    setCartItems(items);
  }, []);

  const removeItem = (itemId) => {
    // Remove item from cart logic
    setCartItems(cartItems.filter((item) => item._id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    // Update item quantity logic
    setCartItems(
      cartItems.map((item) =>
        item._id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.image} alt={item.product_name} />
              <div>
                <h3>{item.product_name}</h3>
                <p>${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item._id, e.target.value)}
                  min="1"
                />
                <button onClick={() => removeItem(item._id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ${getTotalPrice()}</h2>
          <button className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
