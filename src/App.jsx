import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navBar";
import Main from "./components/pages/main"


const Website = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Main />
    </ChakraProvider>
  );
};

export default Website;
