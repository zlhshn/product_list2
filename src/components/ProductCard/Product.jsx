import React from "react";
import "./Product.scss";
import {products} from "../../helper/data.js";

const Product = () => {
  return (
    <div className="container">
      {products.map((item, index) => (
        <div key={index} className="card">
          <div className="card-over">
            <p>{item.title}</p>
          </div>
          <h1>{item.price} $</h1>
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Product;