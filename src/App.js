import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Inquiry from "./components/Inquiry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from "./components/Introduction";
import PrivacyPolicy from "./components/PrivacyPlicy";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
