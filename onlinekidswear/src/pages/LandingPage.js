import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file

// Girls' wardrobe images
import DressesImg from '../assets/dresses.png';
import ShoesImg from '../assets/shoes.png';
import AccessorsImg from '../assets/accessors.png';
import Bottom1Img from '../assets/bottom1.png';
import EthnicImg from '../assets/ethnic.png';
import NightsuitsGirlImg from '../assets/nightsuits.png';
import PartywearGirlImg from '../assets/partywear.png';
import SetsGirlImg from '../assets/sets.png';
import ShortsGirlImg from '../assets/shorts.png';

// Boys' wardrobe images
import SetsBoyImg from '../assets/sets_boy.png';
import PartywearBoyImg from '../assets/partywear_boy.png';
import ShoesBoyImg from '../assets/shoes_boy.png';
import ShortsTeesBoyImg from '../assets/shorts_tees_boy.png';
import BottomsBoyImg from '../assets/bottoms_boy.png';
import EthnicBoyImg from '../assets/ethnic_boy.png';
import NightsuitsBoyImg from '../assets/nightsuits_boy.png';
import ShirtsBoyImg from '../assets/shirts_boy.png';
import AccessoriesBoyImg from '../assets/accessories_boy.png';
// occasion wear
import BrithdayImg from '../assets/brithday.png';
import TravelImg from '../assets/travel.png';
import TraditionalImg from '../assets/traditional.png';
import WeekendImg from '../assets/bweekend.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="nav">
          <Link to="/boys" className="nav-link">Boys</Link>
          <Link to="/girls" className="nav-link">Girls</Link>
          <Link to="/become-a-supplier" className="nav-link">Become a Supplier</Link>
        </nav>
      </header>

      <main className="main">
        {/* Girls' Wardrobe on the left side */}
        <section className="wardrobe girls-wardrobe">
          <h2>Girls' Wardrobe</h2>
          <Link to="/product/dresses" className="product">
            <img src={DressesImg} alt="Dresses" />
            <h3>Dresses</h3>
          </Link>
          <Link to="/product/shoes" className="product">
            <img src={ShoesImg} alt="Shoes" />
            <h3>Shoes</h3>
          </Link>
          <Link to="/product/accessories" className="product">
            <img src={AccessorsImg} alt="Accessories" />
            <h3>Accessories</h3>
          </Link>
          <Link to="/product/bottoms" className="product">
            <img src={Bottom1Img} alt="Bottoms" />
            <h3>Bottoms</h3>
          </Link>
          <Link to="/product/ethnic" className="product">
            <img src={EthnicImg} alt="Ethnic Wear" />
            <h3>Ethnic Wear</h3>
          </Link>
          <Link to="/product/nightsuit" className="product">
            <img src={NightsuitsGirlImg} alt="Night Suits" />
            <h3>Night Suits</h3>
          </Link>
          <Link to="/product/partywear" className="product">
            <img src={PartywearGirlImg} alt="Partywear" />
            <h3>Partywear</h3>
          </Link>
          <Link to="/product/sets" className="product">
            <img src={SetsGirlImg} alt="Full-Length Sets" />
            <h3>Full-Length Sets</h3>
          </Link>
          <Link to="/product/shorts" className="product">
            <img src={ShortsGirlImg} alt="Shorts & Skirt Sets" />
            <h3>Shorts & Skirt Sets</h3>
          </Link>
        </section>

        {/* Occasions Wear in the center */}
        <section className="wardrobe occasions-wear">
          <h2>Occasions Wear</h2>
          <Link to="/product/birthday" className="product">
            <img src={BrithdayImg} alt="Birthday Wear" />
            <h3>Birthday Wear</h3>
          </Link>
          <Link to="/product/travel" className="product">
            <img src={TravelImg} alt="Travel Wear" />
            <h3>Travel Wear</h3>
          </Link>
          <Link to="/product/traditional" className="product">
            <img src={TraditionalImg} alt="Traditional Wear" />
            <h3>Traditional Wear</h3>
          </Link>
          <Link to="/product/weekend" className="product">
            <img src={WeekendImg} alt="Weekend Wear" />
            <h3>Weekend Wear</h3>
          </Link>
        </section>

        {/* Boys' Wardrobe on the right side */}
        <section className="wardrobe boys-wardrobe">
          <h2>Boys' Wardrobe</h2>
          <Link to="/product/sets_boy" className="product">
            <img src={SetsBoyImg} alt="Outfit Sets" />
            <h3>Outfit Sets</h3>
          </Link>
          <Link to="/product/partywear_boy" className="product">
            <img src={PartywearBoyImg} alt="Partywear" />
            <h3>Party Wear</h3>
          </Link>
          <Link to="/product/shoes_boy" className="product">
            <img src={ShoesBoyImg} alt="Shoes" />
            <h3>Shoes</h3>
          </Link>
          <Link to="/product/shorts_tees_boy" className="product">
            <img src={ShortsTeesBoyImg} alt="Shorts & Tees" />
            <h3>Shorts & Tees</h3>
          </Link>
          <Link to="/product/bottoms_boy" className="product">
            <img src={BottomsBoyImg} alt="Bottoms" />
            <h3>Bottoms</h3>
          </Link>
          <Link to="/product/ethnic_boy" className="product">
            <img src={EthnicBoyImg} alt="Ethnic Wear" />
            <h3>Ethnic Wear</h3>
          </Link>
          <Link to="/product/nightsuits_boy" className="product">
            <img src={NightsuitsBoyImg} alt="Night Suits" />
            <h3>Night Suits</h3>
          </Link>
          <Link to="/product/shirts_boy" className="product">
            <img src={ShirtsBoyImg} alt="Shirts" />
            <h3>Shirts</h3>
          </Link>
          <Link to="/product/accessories_boy" className="product">
            <img src={AccessoriesBoyImg} alt="Accessories" />
            <h3>Accessories</h3>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
