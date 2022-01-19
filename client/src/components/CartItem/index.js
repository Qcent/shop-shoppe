import React from 'react';
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  return (
    <div className="flex-row">
      <div>
      <Link to={`/products/${item._id}`}>
        <img
          alt={item.name}
          src={`/images/${item.image}`}
        />
      </Link>
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
          />
          <span
            role="img"
            aria-label="trash"
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;