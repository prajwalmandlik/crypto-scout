import React from 'react';
import Hero from "../assets/hero-png.png";
import "../style/home.css"

const Home = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-png">
          <img src={Hero} alt="" />
        </div>
      
        <div className="hero-text">
          <h1>Crypto Scout</h1>
          <p>Crypto Scout is a source of real-time updates on cryptocurrency prices and popular crypto exchanges. Additionally, it offers comprehensive information to keep you informed in the fast-paced world of cryptocurrencies.</p>
        </div>
      </section>

    </div>
  )
}

export default Home
