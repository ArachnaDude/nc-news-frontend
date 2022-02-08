import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import IndividualArticle from "./components/IndividualArticle";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:topic" element={<Articles />} />
          <Route path="/article/:article_id" element={<IndividualArticle />} />
          <Route path="/users/:user" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
