import React from 'react';

// Importing images for categories
import categoryDressesImg from '../assets/dresses.png'; // Dresses image
import categoryTopsImg from '../assets/tops.png';       // Tops image
import categoryBottomsImg from '../assets/bottom.png';  // Bottoms image
import './Home.css'; // Custom CSS for the HomePage

const HomePage = () => {
  return (
    <div className="homepage  mx-auto justify-center py-5">
      {/* Hero Section */}
      <section className="hero-section ">
        <div className="slider-content ">
          <h1 className="slider-heading">Welcome to KiddoChic</h1>
          <p className="slider-subtitle">Discover trendy and comfortable kidswear for every occasion.</p>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="category-section py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="categories-container grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="category-item shadow-lg p-6 rounded-lg">
            <img src={categoryDressesImg} alt="Dresses" className="category-img mx-auto mb-2" />
            <h3 className="text-2xl font-bold mb-2">Dresses</h3>
            <p className="text-gray-700 mb-4">Dress up your little ones in our stylish designs.</p>
            <button className="category-button">Shop Now</button>
          </div>
          <div className="category-item shadow-lg p-6 rounded-lg">
            <img src={categoryTopsImg} alt="Tops" className="category-img mx-auto mb-2" />
            <h3 className="text-2xl font-bold mb-2">Tops</h3>
            <p className="text-gray-700 mb-4">Explore our range of trendy tops for kids.</p>
            <button className="category-button">Shop Now</button>
          </div>
          <div className="category-item shadow-lg p-6 rounded-lg">
            <img src={categoryBottomsImg} alt="Bottoms" className="category-img mx-auto mb-2" />
            <h3 className="text-2xl font-bold mb-2">Bottoms</h3>
            <p className="text-gray-700 mb-2">Find comfortable and durable bottoms for all occasions.</p>
            <button className="category-button">Shop Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
