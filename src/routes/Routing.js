import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import About from './About';
import Order from './Order';
import Reservations from './Reservations';
import Login from './Login';
import Menu from './Menu';
import Error from './Error';
import ConfirmedBooking from '../components/ConfirmedBooking';

import './routing.css';

const Routing = () => {
  return (
    <div className="App">
      <img src={logo} alt="Little Lemon Logo" />
      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/booking'>BookingPage</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/reservations'>Reservations</Link></li>
          <li><Link to='/order'>Order</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/confirmation'>ConfirmedBooking</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirmation" component={ConfirmedBooking} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
