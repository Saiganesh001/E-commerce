import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import CartItem from "./CartItem";
import "./cart.css";

import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotal } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}

        {getTotal() > 0 ? (
          <div className="checkout">
            <p>SubTotal: ${getTotal()}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          <>
            <p>Your cart is Empty</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
