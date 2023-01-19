import { Box, Spinner, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack h={"90vh"} justifyContent={"center"} color={"black"}>
      <Box transform={"scale(1)"}>
        <Spinner size={"xl"} />
        </Box>
        <Text>Loading...</Text>
    </VStack>
  )
}

export default Loader
