// css
import "./App.css";
// hooks and mechanics
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// contexts
import { UserContext } from "./contexts/user";
// components
import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import IndividualArticle from "./components/IndividualArticle";
import Login from "./components/Login";
import User from "./components/User";
import TopicList from "./components/TopicList";
import ErrorPage from "./components/ErrorPage";

function App() {
  // default logged in user - ALWAYS passes in with "value" in .Provider wrapper
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
            <Route
              path="/articles/:article_id"
              element={<IndividualArticle />}
            />
            <Route path="/topics" element={<TopicList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users/:username" element={<User />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
