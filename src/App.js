import React from "react";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import NewsDetails from "./component/NewsDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsDetails" element={<NewsDetails />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
