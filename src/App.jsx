import * as React from "react";
import "./App.css";
import { ChakraProvider,Box, useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/navBar";
import Main from "./components/pages/main";
import AllProject from "./components/pages/allProject";
import NotFound from "./components/pages/404NotFound";
//import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import theme from "./components/theme.js"

const App = () => {
  const bgColor = useColorModeValue('light.background', 'dark.background');

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box bg={bgColor}>
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<AllProject />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Box>
      {/* <Footer /> */}
    </ChakraProvider>
  );
};

export default App;
