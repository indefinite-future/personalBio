import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navBar";
import Main from "./components/pages/main";
import Projects from "./components/pages/allProject";
import NotFound from "./components/pages/404NotFound";
import { Route, Routes } from "react-router-dom";
import theme from "./components/theme.js"

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route component={NotFound} />
        </Routes>
      </div>
    </ChakraProvider>
  );
};

export default App;
