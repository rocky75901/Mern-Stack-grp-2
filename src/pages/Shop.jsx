import React, { useState } from 'react';
import allProducts from './Admin/AllProducts';
import './Shop.css';

const Shop = () => {
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    price: ''
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const handlePriceChange = (e) => {
    setFilters({
      ...filters,
      price: e.target.value
    });
  };

  const resetFilters = () => {
    setFilters({
      category: '',
      brand: '',
      price: ''
    });
  };

  const filteredProducts = allProducts.filter(product => {
    return (
      (!filters.category || product.category === filters.category) &&
      (!filters.brand || product.brand === filters.brand) &&
      (!filters.price || product.price <= parseFloat(filters.price))
    );
  });

  return (
    <div className="shop-container" >
        <div className="filters-sidebar">
        <h3>Filter by Brands</h3>
        <div className="filter-brand">
          <label>
            <input type="radio" name="brand" value="" onChange={handleFilterChange} checked={filters.brand === ''} /> All
          </label>
          <label>
            <input type="radio" name="brand" value="Apple" onChange={handleFilterChange} checked={filters.brand === 'Apple'} /> Apple
          </label>
          <label>
            <input type="radio" name="brand" value="HP" onChange={handleFilterChange} checked={filters.brand === 'HP'} /> HP
          </label>
          <label>
            <input type="radio" name="brand" value="Samsung" onChange={handleFilterChange} checked={filters.brand === 'Samsung'} /> Samsung
          </label>
          <label>
            <input type="radio" name="brand" value="Drone" onChange={handleFilterChange} checked={filters.brand === 'Drone'} /> Drone
          </label>
          <label>
            <input type="radio" name="brand" value="Marvel" onChange={handleFilterChange} checked={filters.brand === 'Marvel'} /> Marvel
          </label>
          <label>
            <input type="radio" name="brand" value="Boat" onChange={handleFilterChange} checked={filters.brand === 'Boat'} /> Boat
          </label>
          <label>
            <input type="radio" name="brand" value="Adidas" onChange={handleFilterChange} checked={filters.brand === 'Adidas'} /> Adidas
          </label>
          <label>
            <input type="radio" name="brand" value="Canon" onChange={handleFilterChange} checked={filters.brand === 'Canon'} /> Canon
          </label>
        </div>
        <h3>Filter by Price</h3>
        <input type="number" name="price" placeholder="Enter Price" value={filters.price} onChange={handlePriceChange} />
        <button onClick={resetFilters}>Reset Filters</button>
      </div>
      <div className="products-grid">
        <h2 style={{color:"white"}}>{filteredProducts.length} Products</h2>
        <div className="products">
          {filteredProducts.slice(0, 12).map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h4>{product.name}</h4>
                <p>{product.brand}</p>
                <p>${product.price}</p>
                <p>{product.description}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;