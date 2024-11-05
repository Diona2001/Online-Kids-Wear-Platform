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

// Occasion wear images
import BirthdayImg from '../assets/brithday.png'; // Check file path
import TravelImg from '../assets/travel.png';
import TraditionalImg from '../assets/traditional.png';
import WeekendImg from '../assets/bweekend.png'; // Check file path

// Age groups for girls
import BabyGirlImg from '../assets/girlage1.png';
import LittleGirlImg from '../assets/littlegirl.png';
import BigGirlImg from '../assets/biggirl.png';

// Age groups for boys
import BabyBoyImg from '../assets/babyboy.png';
import LittleBoyImg from '../assets/littleboy.png';
import BigBoyImg from '../assets/bigboy.png';

const LandingPage = () => {
  return (
    <div className="landingpage">
      <header className="header">
        <nav className="nav">
          <Link to="/boys" className="nav-link">Boys</Link>
          <Link to="/girls" className="nav-link">Girls</Link>
          <Link to="/become-a-supplier" className="nav-link">Become a Supplier</Link>
        </nav>
      </header>

      <main className="main">
        {/* Girls' Wardrobe Section */}
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
          <Link to="/product/accessors" className="product">
            <img src={AccessorsImg} alt="Accessories" />
            <h3>Accessories</h3>
          </Link>
          <Link to="/product/bottom1" className="product">
            <img src={Bottom1Img} alt="Bottoms" />
            <h3>Bottoms</h3>
          </Link>
          <Link to="/product/ethnic" className="product">
            <img src={EthnicImg} alt="Ethnic Wear" />
            <h3>Ethnic Wear</h3>
          </Link>
          <Link to="/product/nightsuits" className="product">
            <img src={NightsuitsGirlImg} alt="Nightsuits" />
            <h3>Nightsuits</h3>
          </Link>
          <Link to="/product/partywear" className="product">
            <img src={PartywearGirlImg} alt="Party Wear" />
            <h3>Party Wear</h3>
          </Link>
          <Link to="/product/sets" className="product">
            <img src={SetsGirlImg} alt="Sets" />
            <h3>Sets</h3>
          </Link>
          <Link to="/product/shorts" className="product">
            <img src={ShortsGirlImg} alt="Shorts" />
            <h3>Shorts</h3>
          </Link>
        </section>

        {/* Occasions Wear Section */}
        <section className="wardrobe occasions-wear">
          <h2>Occasions Wear</h2>
          <Link to="/product/birthday" className="product">
            <img src={BirthdayImg} alt="Birthday Wear" />
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

          {/* Age Groups for Girls */}
          <section className="age-group girls-age-group">
             <h2>Age Groups for Girls</h2>
          <Link to="/age-group/baby-girl" className="product">
            <img src={BabyGirlImg} alt="Baby Girl" />
            <h3>Baby Girl</h3>
          </Link>
          <Link to="/age-group/little-girl" className="product">
            <img src={LittleGirlImg} alt="Little Girl" />
            <h3>Little Girl</h3>
          </Link>
          <Link to="/age-group/big-girl" className="product">
            <img src={BigGirlImg} alt="Big Girl" />
            <h3>Big Girl</h3>
          </Link>
        </section>

        {/* Boys' Wardrobe Section */}
        <section className="wardrobe boys-wardrobe">
          <h2>Boys' Wardrobe</h2>
          <Link to="/product/sets_boy" className="product">
            <img src={SetsBoyImg} alt="Outfit Sets" />
            <h3>Outfit Sets</h3>
          </Link>
          <Link to="/product/partywear_boy" className="product">
            <img src={PartywearBoyImg} alt="Party Wear" />
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
            <img src={NightsuitsBoyImg} alt="Nightsuits" />
            <h3>Nightsuits</h3>
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

        {/* Age Groups for Boys */}
        <section className="age-group boys-age-group">
          <h2>Age Groups for Boys</h2>
          <Link to="/age-group/baby-boy" className="product">
            <img src={BabyBoyImg} alt="Baby Boy" />
            <h3>Baby Boy</h3>
          </Link>
          <Link to="/age-group/little-boy" className="product">
            <img src={LittleBoyImg} alt="Little Boy" />
            <h3>Little Boy</h3>
          </Link>
          <Link to="/age-group/big-boy" className="product">
            <img src={BigBoyImg} alt="Big Boy" />
            <h3>Big Boy</h3>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
