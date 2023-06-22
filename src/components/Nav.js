import React from 'react';
import './nav.css';
import logo from '../assets/Logo.svg';

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="Little Lemon Logo" />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/booking">BookingPage</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;

