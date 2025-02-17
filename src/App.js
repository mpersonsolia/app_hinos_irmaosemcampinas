import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import LyricsList from "./pages/LyricsList/LyricsList";
import Hymn from "./pages/Hymn/Hymn";
import HomeList from "./pages/HomeList/HomeList";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lyrics_list" element={<LyricsList />} />
        <Route path="/hymn/:id" element={<Hymn />} />
        <Route path="/home_list" element={<HomeList />} />
      </Routes>
    </Router>
  );
}
