import React from 'react';

// Importing images from the src/assets directory
import welcomeImg from '../assets/welcome.png';
import categoryDressesImg from '../assets/dresses.png';
import categoryTopsImg from '../assets/tops.png';
import categoryBottomsImg from '../assets/bottom.png';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Welcome Section */}
      <section className="welcome bg-gray-200 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to KiddoChic</h1>
        <p className="text-lg mt-4">Your one-stop shop for stylish and comfortable kidswear.</p>
        <div className="flex justify-center mt-10">
          <img src={welcomeImg} alt="Welcome" className="w-3/4 h-auto object-cover rounded-md" />
        </div>
      </section>

      {/* Category Section */}
      <section className="category py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Shop by Category</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="category-item bg-white p-10 shadow-lg">
            <img src={categoryDressesImg} alt="Dresses" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-2xl font-bold">Dresses</h3>
            <p className="mt-4">Dress up your little ones in our latest designs.</p>
          </div>
          <div className="category-item bg-white p-10 shadow-lg">
            <img src={categoryTopsImg} alt="Tops" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-2xl font-bold">Tops</h3>
            <p className="mt-4">Explore our range of stylish tops for kids.</p>
          </div>
          <div className="category-item bg-white p-10 shadow-lg">
            <img src={categoryBottomsImg} alt="Bottoms" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-2xl font-bold">Bottoms</h3>
            <p className="mt-4">Find comfortable and durable bottoms for all occasions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
