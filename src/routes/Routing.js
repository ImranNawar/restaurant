import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import HomePage from './HomePage'
import BookingPage from './BookingPage';
import About from './About';
import Order from './Order';
import Reservations from './Reservations';
import Login from './Login';
import Menu from './Menu';
import Error from './Error';

import './routing.css';

const App = () => {
  return (
    <div className='aaa'>
      <img src={logo} alt="Little Lemon Logo" />
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/booking'>BookingPage</Link>
        <Link to='/about'>About</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/reservations'>Reservations</Link>
        <Link to='/order'>Order</Link>
        <Link to='/login'>Login</Link>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/reservations" element={<Reservations />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App