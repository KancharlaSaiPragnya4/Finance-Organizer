import React from 'react';
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ImageWithText from './ImageWithText';
import './ImageWithText.css';
import TextWithImage from './TextWithImage';
import './TextWithImage.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ExpenseFeatures from './ExpenseFeatures';

import ExpenseTracker from './ExpenseTracker';



const Home = () => {
  return (
    <div>
      <Slider
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
        speed={500}
        vertical={false}
        rtl={true}
      >
        <div>
          <img
            src="https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            height="350"
            width="1350"
            alt="Image 1"
          />
        </div>
        <div>
          <img
            src="https://cdn.dribbble.com/users/1099303/screenshots/16492237/media/ec2d875a294959853930b0dfd1f04a82.png"
            height="350"
            width="1350"
            alt="Image 2"
          />
        </div>
      </Slider>
      <div className="scrolling-text">
        <marquee style={{ fontSize: '20px', color: 'black' }}>
          <em>
            <strong>
              Take Control of Your Finances with ExpenseTracker. Cut Unnecessary Expenses. Track Every Penny for Financial Success. Generate Expense Reports.
            </strong>
          </em>
        </marquee>
      </div>
      <ExpenseFeatures/>
      <ImageWithText />
      <TextWithImage />
    </div>
  );
};

const AboutUs = () => {
  return (
   
    <div className="about-us">
    <h2>About Us</h2>
    <Slider
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
        speed={500}
        vertical={false}
        rtl={true}
      >
        <div>
          <img
            src={process.env.PUBLIC_URL + 'main2.jpg'}
            height="350"
            width="1350"
            alt="Image 1"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + 'image8.jpeg'}
            height="350"
            width="1350"
            alt="Image 2"
          />
        </div>
      </Slider>
    <div className="reviews">
    <div className="info-box">
      <h2>We are dedicated to simplifying your financial journey.</h2>
      <p>Our mission is to empower you with the tools to manage your expenses effortlessly. With a user-friendly interface and powerful features, we strive to make tracking and controlling your finances an intuitive experience. Join us on the path to financial wellness – where managing expenses becomes a breeze.</p>
    </div>
    <div className="testimonials-container">
      <div className="best-review">
        <p>Our Best Reviews</p>
      </div>
    </div>
      
  
      <div className="infoo">
      <div className="image-row">
      <img className='hey'
        src={process.env.PUBLIC_URL + 'image2.jpeg'}
        alt="My Image"
      />
      <img className='heyy'
        src={process.env.PUBLIC_URL + 'image7.jpeg'}
        alt="My Image"
      />

  </div>
  <div className="row">
      <img className='hey'
        src={process.env.PUBLIC_URL + 'image3.jpeg'}
        alt="My Image"
      />
      <img className='heyy'
        src={process.env.PUBLIC_URL + 'image4.jpeg'}
        alt="My Image"
      />

  </div>
  <div className="rows">
      <img className='hey'
        src={process.env.PUBLIC_URL + 'image5.jpeg'}
        alt="My Image"
      />
      <img className='heyy'
        src={process.env.PUBLIC_URL + 'image6.jpeg'}
        alt="My Image"
      />

  </div>
    </div>
    </div>
  </div>
);
};

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <h1 className="expense-heading">Financial Organizer</h1>
            <div className="header-buttons">
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
               Register
            </Link>

              <Link to="/" className="btn">
                Home
              </Link>
              <Link to="/about" className="btn">
                About Us
              </Link>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/Expense" element={<ExpenseTracker />} />
        </Routes>

        <div className="background-color">{/* Background color container */}</div>
      </div>
    </Router>
    
  );
}

export default App;
