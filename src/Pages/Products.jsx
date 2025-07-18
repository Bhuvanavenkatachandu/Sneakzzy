import React from 'react';
import products from '../Data/ProdDetails';
import ProductCard from '../Components/ProductCard';

const Products = () => {
  return (
    <div className="products-Page">
      <h2>All Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
