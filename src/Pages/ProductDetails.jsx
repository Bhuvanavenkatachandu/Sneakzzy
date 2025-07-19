import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../Data/ProdDetails';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState('');
  const [message, setMessage] = useState('');

  if (!product) return <div>Product not found.</div>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setMessage('Please select the size to add to cart');
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: 1
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    const index = existingCart.findIndex(
      (item) => item.id === cartItem.id && item.size === cartItem.size
    );

    if (index !== -1) {
      existingCart[index].quantity += 1;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    setMessage(`Added to cart: ${product.name} (Size: ${selectedSize})`);
  };


  
  const sizes = [6, 7, 8, 9, 10, 11];

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: ₹{product.price}</p>
      <p>Description: {product.description}</p>

      <div className="sizes">
        <p>Select size:</p>
        {sizes.map((size) => (
          <button key={size} onClick={() => setSelectedSize(size)}>
            {size}
          </button>
        ))}
      </div>

      <button className="addtocart" onClick={handleAddToCart}>Add to Cart</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductDetails;
