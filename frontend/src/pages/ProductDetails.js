import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetails.css';

import DressDetailsImg1 from '../assets/dressdetail1.png';
import DressDetailsImg2 from '../assets/dressdetail2.png';
import DressDetailsImg3 from '../assets/dressdetails3.png';

const ProductDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  const product = {
    name: '3D Butterfly Applique Party Dress with Bow Headband',
    price: { min: 3299, max: 3599 },
    discountPrice: 3174,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [DressDetailsImg1, DressDetailsImg2, DressDetailsImg3],
  };

  const handleSizeChange = (e) => setSelectedSize(e.target.value);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-container">
      <div className="product-gallery">
        <button className="nav-button prev" onClick={handlePrev}>
          &lt;
        </button>
        <img
          src={product.images[currentIndex]}
          alt={`Dress ${currentIndex + 1}`}
          className="main-image"
        />
        <button className="nav-button next" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p className="price">
          ₹{product.price.min} - ₹{product.price.max}
        </p>
        <p className="discount-price">Best Price: ₹{product.discountPrice}</p>
        <p className="save">You save ₹{product.price.max - product.discountPrice}</p>

        <div className="product-size">
          <h4>Size</h4>
          <select value={selectedSize} onChange={handleSizeChange}>
            <option value="">Select a size</option>
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="product-buttons">
          <Link to="/cart" className="btn-add-cart">
            Add to Cart
          </Link>
          <Link to="/checkout" className="btn-buy-now">
            Buy Now
          </Link>
        </div>

        <div className="delivery-info">
          <p><b>Delivery in 2-3 days</b></p>
          <p><b>15 Days Return & Exchange</b></p>
          <p><b>Cash on Delivery Available</b></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
