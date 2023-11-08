import React from "react";
import { createContext, useState } from "react";
import { PRODUCTS } from "../products";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < PRODUCTS.length; i++) {
      total += PRODUCTS[i].price * cartItems[PRODUCTS[i].id];
    }
    return total;
  };
  const addToCart = (id) => {
    let newCart = { ...cartItems };
    newCart[id] += 1;
    setCartItems(newCart);
  };

  const removeFromCart = (id) => {
    let newCart = { ...cartItems };
    newCart[id] -= 1;
    setCartItems(newCart);
  };

  const updateCartItemCount = (newAmount, id) => {
    setCartItems((prev) => ({ ...prev, [id]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotal,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
