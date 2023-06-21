import React from 'react';
import './header.css';
import restauranfood from '../assets/restauranfood.jpg';

function Header() {
  return (
    <header className="header-container">
      <div className="content">
        <div className="text-container">
          <h1 className="heading">Welcome to Little Lemon</h1>
          <h4 className='Paragraph'>Pakistan</h4>
          <p className="paragraph">We are a family owned Mediterrnean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="button">Reserve a Table</button>
        </div>
        <img className="image" src={restauranfood} alt="Restaurant food" />
      </div>
    </header>
  );
}

export default Header;
