import React from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SmallWithNavigation() {
  return (
    <Box className='container-bottom'
      bg={"rgb(43, 43, 43)"}
      color={"white"}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
      </Container>
    </Box>
  );
}