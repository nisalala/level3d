import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h4>{title}</h4>
      <p>${price}</p>
      <button className="purchase-button">Purchase</button>
    </div>
  );
};

export default ProductCard;
