import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import IndividualArticle from "./components/IndividualArticle";
import Login from "./components/Login";
import User from "./components/User";
import { UserContext } from "./contexts/user";
import TopicList from "./components/TopicList";
import ErrorPage from "./components/ErrorPage";

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
            <Route
              path="/articles/:article_id"
              element={<IndividualArticle />}
            />
            <Route path="/users/:username" element={<User />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
