import { Box, Container, HStack, Image, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { server } from '..';
import Errorcomponet from './ErrorComponet';
import Loader from "./Loader";

const CoinsDetails = () => {

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const params = useParams()

  const currencySymbol = currency === 'inr' ? "₹" : currency === "eur" ? "€" : "$" ;

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);

        setCoin(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id]);

  if (error) return (<Errorcomponet message={"Error while Fetching Coins"} />);


  return (
    <Container maxW={"container.lg"}>
      {
        loading ? <Loader /> : (
          <>
          <Box width={"full"} borderWidth={1}>
            graph
          </Box>

          {/* { button} */}

          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"8"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf="center" opacity={0.7}>
              Last Updated On {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>

            <Image src={coin.image.large} />

            <Text >
              Name : {coin.name}
            </Text>
            <Text >
              Current Price : {currencySymbol}{coin.market_data.current_price[currency]}
            </Text>
          </VStack>
          </>
        )
      }
    </Container>
  )
}

export default CoinsDetails
