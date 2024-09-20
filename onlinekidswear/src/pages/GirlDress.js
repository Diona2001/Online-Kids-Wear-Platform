/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GirlDress.css'; // Import the CSS file

// Girls' wardrobe images
import GirlDresses1Img from '../assets/dress1.png';
import GirlDresses2Img from '../assets/dress2.png';
import GirlDresses3Img from '../assets/dress3.png';
import GirlDresses4Img from '../assets/dress4.png';
import GirlDresses5Img from '../assets/dress5.png';
import GirlDresses6Img from '../assets/dress6.png';
import GirlDresses7Img from '../assets/dress7.png';
import GirlDresses8Img from '../assets/dress8.png';
import GirlDresses9Img from '../assets/dress9.png';

// Product data for dresses
const dresses = [
  { id: 'dress1', img: GirlDresses1Img, price: 2500, sizes: ['S', 'M', 'L'], name: 'Dress 1', style: 'Casual', neckline: 'Round', color: 'Red', ageGroup: '0-6 months', occasion: 'Party' },
  { id: 'dress2', img: GirlDresses2Img, price: 3000, sizes: ['S', 'M', 'L'], name: 'Dress 2', style: 'Party', neckline: 'V-Neck', color: 'Blue', ageGroup: '1-2 years', occasion: 'Casual' },
  { id: 'dress3', img: GirlDresses3Img, price: 1000, sizes: ['S', 'M', 'L'], name: 'Dress 3', style: 'Ethnic', neckline: 'Square', color: 'Pink', ageGroup: '3-4 years', occasion: 'Ethnic' },
  { id: 'dress4', img: GirlDresses4Img, price: 600, sizes: ['S', 'M', 'L'], name: 'Dress 4', style: 'Casual', neckline: 'Round', color: 'Yellow', ageGroup: '5-6 years', occasion: 'Party' },
  { id: 'dress5', img: GirlDresses5Img, price: 2000, sizes: ['S', 'M', 'L'], name: 'Dress 5', style: 'Party', neckline: 'Boat', color: 'Red', ageGroup: '0-6 months', occasion: 'Casual' },
  { id: 'dress6', img: GirlDresses6Img, price: 500, sizes: ['S', 'M', 'L'], name: 'Dress 6', style: 'Ethnic', neckline: 'V-Neck', color: 'Blue', ageGroup: '1-2 years', occasion: 'Ethnic' },
  { id: 'dress7', img: GirlDresses7Img, price: 500, sizes: ['S', 'M', 'L'], name: 'Dress 7', style: 'Casual', neckline: 'Square', color: 'Pink', ageGroup: '3-4 years', occasion: 'Casual' },
  { id: 'dress8', img: GirlDresses8Img, price: 3200, sizes: ['S', 'M', 'L'], name: 'Dress 8', style: 'Party', neckline: 'Boat', color: 'Yellow', ageGroup: '5-6 years', occasion: 'Party' },
  { id: 'dress9', img: GirlDresses9Img, price: 1500, sizes: ['S', 'M', 'L'], name: 'Dress 9', style: 'Ethnic', neckline: 'Round', color: 'Green', ageGroup: '0-6 months', occasion: 'Ethnic' }
];

function GirlDress() {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedFilter, setSelectedFilter] = useState({
    age: [],
    color: [],
    occasion: [],
    price: [],
    style: [],
    neckline: []
  });

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;

    setSelectedFilter({
      ...selectedFilter,
      [name]: checked
        ? [...selectedFilter[name], value]
        : selectedFilter[name].filter((item) => item !== value)
    });
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className="girl-dress-page">
      <div className="filter-container">
        <h3><b>Filter by</b></h3>

        {/* Age Group Filter */}
        <div className="filter-group">
          <label>Age Group</label>
          <div>
            <input type="checkbox" name="age" value="0-6 months" onChange={handleFilterChange} /> 0-6 months<br />
            <input type="checkbox" name="age" value="6-12 months" onChange={handleFilterChange} /> 6-12 months<br />
            <input type="checkbox" name="age" value="1-2 years" onChange={handleFilterChange} /> 1-2 years<br />
            <input type="checkbox" name="age" value="3-4 years" onChange={handleFilterChange} /> 3-4 years<br />
            <input type="checkbox" name="age" value="5-6 years" onChange={handleFilterChange} /> 5-6 years
          </div>
        </div>

        {/* Color Filter */}
        <div className="filter-group">
          <label>Color</label>
          <div>
            <input type="checkbox" name="color" value="Red" onChange={handleFilterChange} /> Red<br />
            <input type="checkbox" name="color" value="Blue" onChange={handleFilterChange} /> Blue<br />
            <input type="checkbox" name="color" value="Pink" onChange={handleFilterChange} /> Pink<br />
            <input type="checkbox" name="color" value="Yellow" onChange={handleFilterChange} /> Yellow<br />
            <input type="checkbox" name="color" value="Green" onChange={handleFilterChange} /> Green
          </div>
        </div>

        {/* Occasion Filter */}
        <div className="filter-group">
          <label>Occasion</label>
          <div>
            <input type="checkbox" name="occasion" value="Casual" onChange={handleFilterChange} /> Casual<br />
            <input type="checkbox" name="occasion" value="Party" onChange={handleFilterChange} /> Party<br />
            <input type="checkbox" name="occasion" value="Ethnic" onChange={handleFilterChange} /> Ethnic
          </div>
        </div>

        {/* Price Filter */}
        <div className="filter-group">
          <label>Price</label>
          <div>
            <input type="checkbox" name="price" value="20-30" onChange={handleFilterChange} /> $20-$30<br />
            <input type="checkbox" name="price" value="31-40" onChange={handleFilterChange} /> $31-$40
          </div>
        </div>

        {/* Style Filter */}
        <div className="filter-group">
          <label>Style</label>
          <div>
            <input type="checkbox" name="style" value="Casual" onChange={handleFilterChange} /> Casual<br />
            <input type="checkbox" name="style" value="Party" onChange={handleFilterChange} /> Party<br />
            <input type="checkbox" name="style" value="Ethnic" onChange={handleFilterChange} /> Ethnic
          </div>
        </div>

        {/* Neckline Filter */}
        <div className="filter-group">
          <label>Neckline</label>
          <div>
            <input type="checkbox" name="neckline" value="Round" onChange={handleFilterChange} /> Round<br />
            <input type="checkbox" name="neckline" value="V-Neck" onChange={handleFilterChange} /> V-Neck<br />
            <input type="checkbox" name="neckline" value="Square" onChange={handleFilterChange} /> Square<br />
            <input type="checkbox" name="neckline" value="Boat" onChange={handleFilterChange} /> Boat
          </div>
        </div>
      </div>

      <div className="girl-dress-container">
        <h2 className="section-title">Girls' Dress Collection</h2>
        <div className="dress-grid">
          {dresses.map((dress) => (
            <div key={dress.id} className="dress-item">
              <Link to={`/product/${dress.id}`}>
                <img src={dress.img} alt={dress.name} />
              </Link>
              <p className="dress-price">₹{dress.price}</p>
              <div className="size-selector">
                <label>Size:</label>
                <select value={selectedSize} onChange={handleSizeChange}>
                  <option value="">Select Size</option>
                  {dress.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GirlDress;
