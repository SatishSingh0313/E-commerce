import React from "react";

const Card = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      {/* <img src={product.image} alt={product.name} className="product-image" /> */}
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-category">{product.category}</p>
        <p className="product-company">{product.company}</p>
        <button className="add-to-cart-button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
