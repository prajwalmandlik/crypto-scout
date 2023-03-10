import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { server } from "../index";
import Hero from "../assets/hero-png.png";
import "../style/home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Errorcomponent from "./ErrorComponent";
// import Loader from "./Loader";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {currency , currencySymbol} = useSelector(state => state.custom)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&per_page=7`
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

  if (error) return <Errorcomponent message={"Error While Fetching Coin"} />;

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
        <div>
          <h2>Top perfoming coins of day</h2>
          <div className="home-coin-table">
            {loading ? (
              <div>
              <VStack h={"90vh"} justifyContent={"center"} color={"white"}>
                <Box transform={"scale(1)"}>
                  <Spinner size={"xl"} />
                  </Box>
                  <Text>Loading...</Text>
              </VStack>
              </div>
            ) : (
              <table>
                <tr>
                  {/* <th>#</th> */}
                  <th>Coins</th>
                  <th>Price</th>
                  <th>24 change</th>
                  <th className="market-cap">Market Cap</th>
                </tr>
                {coins.map((i) => {
                  return (
                    <tr>
                      {/* <td>{i.market_cap_rank}</td> */}
                      <td>
                        <Link to={`/coin/${i.id}`} className="coin-name">
                          <img src={i.image} alt="" width={"32px"} />
                          <div>{i.name}</div>
                        </Link>
                      </td>
                      <td>
                        {currencySymbol}
                        {i.current_price}
                      </td>
                      <td
                        className={
                          i.price_change_percentage_24h > 0 ? "green" : "red"
                        }
                      >
                        {i.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      <td className="market-cap">
                        {currencySymbol}
                        {(i.market_cap).toExponential(2)}
                      </td>
                    </tr>
                  );
                })}
              </table>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
