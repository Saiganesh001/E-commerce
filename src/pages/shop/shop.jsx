import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
const Shop = () => {
  return (
    <div className="shop">
      <div>
        <h1>Favorite shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
