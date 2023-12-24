import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navBar";
import Main from "./components/pages/main";
import About from "./components/pages/about";
import NotFound from "./components/pages/404NotFound";
import { Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route component={NotFound} />
        </Routes>
        <SpeedInsights />
      </div>
    </ChakraProvider>
  );
};

export default App;
