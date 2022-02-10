import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/user";

const Nav = () => {
  const userValues = useContext(UserContext);
  console.log(userValues);
  return (
    <nav>
      Topics: <Link to="/articles/topics/football">Football</Link> |{" "}
      <Link to="/articles/topics/cooking">Cooking</Link> |{" "}
      <Link to="/articles/topics/coding">Coding</Link>
    </nav>
  );
};

export default Nav;
