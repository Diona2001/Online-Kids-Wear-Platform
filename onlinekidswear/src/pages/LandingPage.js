// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="nav">
          <Link to="/boys" className="nav-link">Boys</Link>
          <Link to="/girls" className="nav-link">Girls</Link>
          <Link to="/become-a-supplier" className="nav-link">Become a Supplier</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1>Welcome to KiddoChic</h1>
          <p>Discover the best kidswear for every age group.</p>
        </section>

        <section className="age-groups">
          <h2>Shop by Age Group</h2>
          <div className="age-group">
            <h3>Infants</h3>
            <p>Find adorable clothes for your little ones.</p>
          </div>
          <div className="age-group">
            <h3>Toddlers</h3>
            <p>Stylish and comfortable outfits for toddlers.</p>
          </div>
          <div className="age-group">
            <h3>Kids</h3>
            <p>Trendy clothing for school and play.</p>
          </div>
          <div className="age-group">
            <h3>Teens</h3>
            <p>Fashionable and fun styles for teenagers.</p>
          </div>
        </section>

        <section className="products">
          <h2>Featured Products</h2>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1.</p>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Product 2</h3>
            <p>Description of Product 2.</p>
          </div>
          <div className="product">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>Description of Product 3.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 KiddoChic. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
