import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import PropTypes from 'prop-types'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={/product/${product.id}}>
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="product-card-details">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;