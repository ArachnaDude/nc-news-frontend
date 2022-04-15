import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import IndividualArticle from "./components/IndividualArticle";
import Login from "./components/Login";
import User from "./components/User";
import { UserContext } from "./contexts/user";
import TopicList from "./components/TopicList";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/topics" element={<TopicList />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/articles/topics/:topic" element={<Articles />} /> */}
            <Route
              path="/articles/:article_id"
              element={<IndividualArticle />}
            />
            <Route path="/users/:username" element={<User />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
