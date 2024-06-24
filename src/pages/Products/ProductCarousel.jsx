import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductCarousel.css';
import allProducts from '../Admin/AllProducts';
import { NextArrow, PrevArrow } from './CarouselArrows';


const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const products = allProducts.slice(0, 3);

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-carousel-card">
            <img src={product.image} alt={product.name} className="product-carousel-image" />
            <div className="product-carousel-details">
              <h3>{product.name}</h3>
              <p>Brand: {product.brand}</p>
              <p style={{fontWeight:"800"}}>Price: $ {product.price}</p>
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;