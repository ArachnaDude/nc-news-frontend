import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "../App";

const Nav = () => {
  // navigate is an invoked instance of useNavigate.
  const navigate = useNavigate();

  const [filter, setFilter] = useState("all");

  // setFilter updates the filter state to what we selected from the dropdown
  const handleChange = (event) => {
    setFilter(event.target.value);
    // "all" isnt a valid topic, so selecting it uses the Articles
    // component WITHOUT a query - see App.js route path Articles
    // if a topic query is present, it uses the articles/topic/:topic
    // route instead
    if (event.target.value === "all") {
      navigate("/articles");
    } else {
      navigate(`/articles?topic=${event.target.value}`);
    }
  };

  return (
    <nav className="navBar">
      {/* select is HTML for a dropdown list */}
      <select value={filter} onChange={handleChange}>
        <option value="all">All</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
      </select>
    </nav>
  );
};

export default Nav;
