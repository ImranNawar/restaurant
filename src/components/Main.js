import React from 'react';
import './main.css';
import greeksalad from '../assets/greek salad.jpg';
import lemondessert from '../assets/lemon dessert.jpg';
import bruchetta from '../assets/bruchetta.svg';
import basketIcon from '../assets/basket.svg';


const Main = () => {
  return (
    <main>
      <div className="special-container">
        <h2>This Week's Special</h2>
        <button className="button">Online Menu</button>
      </div>
      <div className="cards-container">
        <div className="card card-left">
          <img src={greeksalad} alt="Card 1" />
          <div className="card-info">
            <h3>Card 1 Heading</h3>
            <p>Price: $10</p>
          </div>
            <p>Card 1 description text goes here.</p>
            <a href="#" className="card-link">
             <h4>Order a delivery</h4> <img src={basketIcon} alt="Basket Icon" className="icon" style={{ width: '2em', height: '2em' }} />
          </a>
        </div>
        <div className="card">
          <img src={bruchetta} alt="Card 2" />
          <div className="card-info">
            <h3>Card 2 Heading</h3>
            <p>Price: $12</p>
          </div>
            <p>Card 2 description text goes here.</p>
            <a href="#" className="card-link">
            <h4>Order a delivery</h4> <img src={basketIcon} alt="Basket Icon" className="icon" style={{ width: '2em', height: '2em' }} />
          </a>
        </div>
        <div className="card card-right">
          <img src={lemondessert} alt="Card 3" />
          <div className="card-info">
            <h3>Card 3 Heading</h3>
            <p>Price: $15</p>
          </div>
            <p>Card 3 description text goes here.</p>
            <a href="#" className="card-link">
            <h4>Order a delivery</h4> <img src={basketIcon} alt="Basket Icon" className="icon" style={{ width: '2em', height: '2em' }} />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main;
