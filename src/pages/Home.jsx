import React, { useEffect, useState } from 'react';
import Product from './Products/Product';
import ProductCarousel from './Products/ProductCarousel'
import  AllProducts from './Admin/AllProducts';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(AllProducts);
  }, []);

  return (
    <div className="home-page">
      <div className='heading'>
      <h1>Welcome to ACA E-commerce Website</h1>
      <h2>Explore a diverse selection of high-quality products and exclusive deals tailored to your needs. Enjoy a seamless shopping experience with us.</h2></div>
      <div className="products-section">
        {products.slice(0, 3).map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
      <div><ProductCarousel/></div>
    </div>
  );
};

export default Home;