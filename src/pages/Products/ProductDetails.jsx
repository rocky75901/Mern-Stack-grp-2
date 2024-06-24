import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../Admin/AllProducts';

const ProductDetail = () => {
  const { id } = useParams(); 
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='product-container-details'>
        <img src={product.image} alt={product.name} className="product-image-details" />
      <div className="product-details-details">
        <h3 className="product-name-details">{product.name}</h3>
        <p className="product-description-details">{product.description}</p>
        <p className="product-brand-details">{product.brand}</p>
        <p className="product-price-details">$ {product.price}</p>
        <button className="product-button-details">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
