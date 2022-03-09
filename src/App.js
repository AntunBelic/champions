import React from "react";
import ChampionRotation from "./components/ChampionRotation/ChampionRotation";
import ChampionInfo from "./components/ChampionInfo/ChampionInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ChampionRotation />} />
          <Route path="/ChampionInfo/:championId" element={<ChampionInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
