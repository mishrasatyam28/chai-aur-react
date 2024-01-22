import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import { Footer } from "./components/Footer.jsx";
import Videos from "./components/Videos.jsx";
import Upload from "./components/Upload.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// 3:41
