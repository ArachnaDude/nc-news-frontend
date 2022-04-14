import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "../App";

const Nav = () => {
  // navigate is an invoked instance of useNavigate.
  const navigate = useNavigate();

  const [filterBy, setFilterBy] = useState("all");

  //change sortBy default state
  const [sortBy, setSortBy] = useState("created_at");

  //change direction default state
  const [directon, setDirection] = useState("desc");

  // setFilter updates the filter state to what we selected from the dropdown
  const handleChange = (event) => {
    setFilterBy(event.target.value);
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

  const handleChangeOrder = (event) => {
    setSortBy(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeDirection = (event) => {
    setDirection(event.target.value);
    console.log(event.target.value);
  };

  return (
    <nav className="navBar">
      Select a topic
      {/* select is HTML for a dropdown list */}
      <select value={filterBy} onChange={handleChange}>
        <option value="all">All</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
      </select>{" "}
      Order by:
      <select value={sortBy} onChange={handleChangeOrder}>
        <option value="created_at">Date created</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comment count</option>
      </select>{" "}
      Directon:
      <select value={directon} onChange={handleChangeDirection}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </nav>
  );
};

export default Nav;
