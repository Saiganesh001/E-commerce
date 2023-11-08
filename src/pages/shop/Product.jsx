import React from "react";
import "./shop.css";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="blah" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}</p>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add to CART{cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
