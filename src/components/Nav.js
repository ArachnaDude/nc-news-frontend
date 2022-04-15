import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "../App";

const Nav = () => {
  // navigate is an invoked instance of useNavigate.
  const navigate = useNavigate();

  // changed state from "all" to empty string
  const [filterBy, setFilterBy] = useState("");

  const [sortBy, setSortBy] = useState("");

  const [directon, setDirection] = useState("");

  // setFilter updates the filter state to what we selected from the dropdown
  const handleChange = (event) => {
    setFilterBy(event.target.value);
    // "all" isnt a valid topic, so selecting it uses the Articles
    // component WITHOUT a query - see App.js route path Articles -
    // if a topic query is present, it uses the articles
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
      {/* select is HTML for a dropdown list */}
      <select value={filterBy} onChange={handleChange}>
        <option value="" disabled defaultValue>
          Select a topic
        </option>
        <option value="all">All</option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
      </select>{" "}
      <select value={sortBy} onChange={handleChangeOrder}>
        <option value="" disabled defaultValue>
          Sort By
        </option>
        <option value="created_at">Date created</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comment count</option>
      </select>{" "}
      <select value={directon} onChange={handleChangeDirection}>
        <option value="" disabled defaultValue>
          Order by
        </option>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </nav>
  );
};

export default Nav;
