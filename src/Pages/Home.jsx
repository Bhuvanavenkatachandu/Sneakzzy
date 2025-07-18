import React from 'react';
import products from '../Data/ProdDetails';
import ProductCard from '../Components/ProductCard';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to ShoeZone</h1>
      <p>Find the best shoes from top brands at amazing prices!</p>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
