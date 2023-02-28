import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Button,
  Container,
  HStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import CoinCard from "./CoinCard";
import Errorcomponent from "./ErrorComponent";
import { useSelector } from "react-redux";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  // const [currency, setCurrency] = useState("inr");
  // const currencySymbol = currency === 'inr' ? "₹" : currency === "eur" ? "€" : "$" ;

  const {currency , currencySymbol} = useSelector(state => state.custom)

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  }

  const btns = new Array(132).fill(1)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);

        setCoins(data);
        setLoading(false);
        // console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return (<Errorcomponent message={"Error while Fetching Coins"} />);

  return (
    <div className="bgColor">
    <Container maxW={"container.xl"} className="container" color={"white"}>
      {loading ? (
        <Loader />
      ) : (
        <>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"} >
            {coins.map((i) => {
              return (
                <CoinCard
                  id={i.id}
                  key={i.id}
                  name={i.name}
                  img={i.image}
                  price={i.current_price}
                  symbol={i.symbol}
                  currncySymbol={currencySymbol}
                />
              );
            })}
          </HStack>

          <HStack overflow={"auto"} p={"8"}>
            {
              btns.map((item, index) =>(
            <Button
            key={index}
              bgColor={"blackAlpha.900"}
              color={"white"}
              onClick={() => changePage(index + 1)}>
              {index + 1}
            </Button>
            ))
            }
          </HStack>
        </>
      )}
    </Container>
    </div>
  );
};


export default Coins;
