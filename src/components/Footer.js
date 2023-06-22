import React from 'react';
import './footer.css'
import logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="Little Lemon Logo" />
      <div className="contact">
        <h3>Contact</h3>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Email: info@littlelemon.com</p>
        <p>Phone: +92 123-456-7890</p>
      </div>
      <div className="social-media">
        <h3>Social Media</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="doormat-navigation">
        <h3>Doormat Navigation</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
      <p className="footer-text">© 2023 Little Lemon. All rights reserved.</p>
    </footer>
  );
}


export default Footer;
