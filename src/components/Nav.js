import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("all");

  const handleChange = (event) => {
    setFilter(event.target.value);
    if (event.target.value === "all") {
      navigate("/articles");
    } else {
      navigate(`/articles?topic=${event.target.value}`);
    }
  };

  return (
    <nav className="navBar">
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
