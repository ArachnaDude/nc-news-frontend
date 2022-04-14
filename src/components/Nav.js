import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const handleChange = (event) => {
    setFilter(event.target.value);
    navigate(`/articles/topics/${event.target.value}`);
  };

  return (
    <nav className="navBar">
      <select value={filter} onChange={handleChange}>
        <option disabled value="all">
          All
        </option>
        <option value="coding">Coding</option>
        <option value="football">Football</option>
        <option value="cooking">Cooking</option>
      </select>
    </nav>
  );
};

export default Nav;
