import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file
import KidsImg from '../assets/kids.png';
import DressesImg from '../assets/dresses.png';
import ShoesImg from '../assets/shoes.png';
import AccessorsImg from '../assets/accessors.png';
import Bottom1Img from '../assets/bottom1.png';
import Dresses1Img from '../assets/dresses1.png';
import EthnicImg from '../assets/ethnic.png';
import NightsuitsImg from '../assets/nightsuits.png';
import PartywearImg from '../assets/partywear.png';
import SetsImg from '../assets/sets.png';
import ShortSkirtsImg from '../assets/short&skirts.png';
import TeesImg from '../assets/tees.png';

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
        <section className="age-groups">
          <h2>Shop by Age Group</h2>
          <div className="age-group">
            <h3>Infants</h3>
          </div>
          <div className="age-group">
            <h3>Toddlers</h3>
            
          </div>
          <div className="age-group">
            <h3>Kids</h3>
            
          </div>
          <div className="age-group">
            <h3>Teens</h3>
            
          </div>
        </section>

        <section className="products">
          <h2>Featured Products</h2>
          <div className="product">
            <h3>New Style</h3>
            <p>Modern and stylish outfits for kids.</p>
            <Link to="/product/newstyle" className="view-details">View Details</Link>
          </div>
          <div className="product">
            <img src={DressesImg} alt="Dresses" />
            <h3>Dresses</h3>
            <p>Elegant dresses for special occasions.</p>
            <Link to="/product/dresses" className="view-details">View Details</Link>
          </div>
          <div className="product">
            <img src={ShoesImg} alt="Shoes" />
            <h3>Shoes</h3>
            <p>Comfortable and stylish footwear for kids.</p>
            <Link to="/product/shoes" className="view-details">View Details</Link>
          </div>
          <div className="product">
            <img src={AccessorsImg} alt="Accessories" />
            <h3>Accessories</h3>
            <p>Complete your outfit with fun accessories.</p>
            <Link to="/product/accessories" className="view-details">View Details</Link>
          </div>
          <div className="product">
            <img src={Bottom1Img} alt="Bottoms" />
            <h3>Bottoms</h3>
            <p>Stylish bottoms for every occasion.</p>
            <Link to="/product/bottoms" className="view-details">View Details</Link>
          </div>
          <div className="product">
            <img src={Dresses1Img} alt="Dresses 1" />
            <h3>Casual Dresses</h3>
            <p>Perfect dresses for everyday wear.</p>
            <Link to="/product/dresses1" className="view-details">View Details</Link>
          </div>
          <div className="product">
            <img src={EthnicImg} alt="Ethnic" />
            <h3>Ethnic Wear</h3>
            <p>Traditional ethnic outfits for special occasions.</p>
            <Link to="/product/ethnic" className="view-details">View Details</Link>
          </div>
          <div className="product">
            <img src={NightsuitsImg} alt="Nightsuits" />
            <h3>Night Suits</h3>
            <p>Comfortable nightwear for a good night's sleep.</p>
            <Link to="/product/nightsuits" className="view-details">View Details</Link>
          </div>
          <div className="product">
            <img src={PartywearImg} alt="Partywear" />
            <h3>Party Wear</h3>
            <p>Outfits for every celebration.</p>
            <Link to="/product/partywear" className="view-details">View Details</Link>
          </div>
          <div className="product">
            <img src={SetsImg} alt="Sets" />
            <h3>Outfit Sets</h3>
            <p>Perfectly matched sets for every day.</p>
            <Link to="/product/sets" className="view-details">View Details</Link>
          </div>
          <div className="product">
            <img src={ShortSkirtsImg} alt="Shorts & Skirts" />
            <h3>Shorts & Skirts</h3>
            <p>Trendy bottoms for summer days.</p>
            <Link to="/product/short-skirts" className="view-details">View Details</Link>
          </div>
          <div className="product">
            <img src={TeesImg} alt="Tees" />
            <h3>Tees</h3>
            <p>Casual tees for everyday wear.</p>
            <Link to="/product/tees" className="view-details">View Details</Link>
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
