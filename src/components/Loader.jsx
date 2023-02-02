import { Box, Spinner, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <div className="bgColor">
    <VStack h={"90vh"} justifyContent={"center"} color={"white"}>
      <Box transform={"scale(1)"}>
        <Spinner size={"xl"} />
        </Box>
        <Text>Loading...</Text>
    </VStack>
    </div>
  )
}

export default Loader
