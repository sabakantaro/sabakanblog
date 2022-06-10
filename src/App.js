import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Inquiry from "./components/Inquiry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introduction from "./components/Introduction";
import PrivacyPolicy from "./components/PrivacyPlicy";
import Post from "./components/Post";

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
          <Route path="post" element={<Post />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
