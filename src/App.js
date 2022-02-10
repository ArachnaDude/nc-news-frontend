import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import IndividualArticle from "./components/IndividualArticle";
import User from "./components/User";
import { UserContext } from "./contexts/user";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
  });
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/articles/topics/:topic" element={<Articles />} />
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
