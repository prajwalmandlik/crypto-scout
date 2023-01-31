import { Button , HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
// import "../style/header.scss";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <HStack p={"2"} shadow={"base"} bgColor={"blackAlpha.900"} className="navbar" justifyContent={"space-between"} fontSize={"1rem"}>
      <HStack>
        <Image src={Logo} boxSize={"32px"} />
        <Text color={"#ff9900"}> Crypto Scout</Text>
        </HStack>
      <HStack maxW={"200px"} justifyContent={"space-evenly"} >
        <Button variant={"unstyled"} color={"white"}>
              <Link to="/">Home</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"}>
              <Link to="/exchanges">Exchanges</Link>
          </Button>
          <Button variant={"unstyled"} color={"white"}>
              <Link to="/coins">Coins</Link>
          </Button>
      </HStack>
    </HStack>
  )
}

export default Header
