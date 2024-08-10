import React from "react";
import "../styles/OrderSummary.css";

const OrderSummary = ({ order }) => {
  return (
    <div className="order-summary">
      <h1>Order Summary</h1>
      <p>
        <strong>Name:</strong> {order.name}
      </p>
      <p>
        <strong>Email:</strong> {order.email}
      </p>
      <p>
        <strong>Address:</strong> {order.address}
      </p>
      <h2>Items:</h2>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>
            {item.product_name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <h2>Total: ${order.total}</h2>
      <p>
        <strong>Status:</strong> {order.status}
      </p>
    </div>
  );
};

export default OrderSummary;
