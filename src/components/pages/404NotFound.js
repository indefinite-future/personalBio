// 404NotFound.jsx

import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Link as ChakraLink
} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

function NotFound() {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <ChakraLink as={ReactRouterLink} to="/">
          <Button colorScheme="blue">Go back home</Button>
        </ChakraLink>
      </Box>
    </Container>
  );
}

export default NotFound;
