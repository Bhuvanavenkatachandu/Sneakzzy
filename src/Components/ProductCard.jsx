import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="ProductCard">
      <img src={product.image} alt={product.name} />
      <h3 className="ProdName">{product.name}</h3>
      <p>₹{product.price}</p>
      <p>Details: {product.description}</p>
      <Link to={`/product/${product.id}`} className="View-Link">View</Link>
    </div>
  );
};

export default ProductCard;
