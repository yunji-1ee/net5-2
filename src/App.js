import React from "react";
import { Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import UpdatePage from "./pages/UpdatePage";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>🕊️ Pieace Member 🕊️</h1>
      </header>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/update" element={<UpdatePage />} />
      </Routes>
    </div>
  );
};

export default App;
