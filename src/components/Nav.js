import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  return (
    <nav>
      Search by topic: <Link to="/articles/football">Football</Link> |{" "}
      <Link to="/articles/cooking">Cooking</Link> |{" "}
      <Link to="/articles/coding">Coding</Link>
    </nav>
  );
};

export default Nav;
