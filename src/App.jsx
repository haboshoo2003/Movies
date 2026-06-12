import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContextProvider from "./context/GlobalContext";

import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import "./App.css";

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
};

export default App;
