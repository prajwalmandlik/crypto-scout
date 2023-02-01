import { HStack, Radio, RadioGroup, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { server } from "../index";
import Hero from "../assets/hero-png.png";
import "../style/home.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&per_page=10`
        );

        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency]);

  return (
    <div className=" container">
      <section className="hero home-section">
        <div className="hero-png">
          <img src={Hero} alt="" />
        </div>

        <div className="hero-text">
          <h1>Crypto Scout</h1>
          <p>
            Crypto Scout is a source of real-time updates on cryptocurrency
            prices and popular crypto exchanges. Additionally, it offers
            comprehensive information to keep you informed in the fast-paced
            world of cryptocurrencies.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="home-coin-table">
          {loading ? <Loader /> 
          : 
          <table>
            <tr>
              <th>#</th>
              <th>Coins</th>
              <th>Price</th>
              <th>24 change</th>
              <th>Market Cap</th>
            </tr>
            {coins.map((i) => {
              return (
                <tr>
                  <td>{i.market_cap_rank}</td>
                  <td>
                    <Link to={`/coin/${i.id}`}>
                      <img src={i.image} alt="" width={"32px"} />
                      {i.name}
                    </Link>
                  </td>
                  <td>
                    {currencySymbol}
                    {i.current_price}
                  </td>
                  <td>{i.price_change_percentage_24h}</td>
                  <td>
                    {currencySymbol}
                    {i.market_cap}
                  </td>
                </tr>
              );
            })}
          </table>
          
          }
        </div>

        <div className="home-coin-text">
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <VStack spacing={"8"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </VStack>
          </RadioGroup>
        </div>
      </section>
    </div>
  );
};



export default Home;
