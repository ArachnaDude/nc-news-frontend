import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = () => {
  return (
    <nav className="navBar">
      <Link to={"/"}>Home</Link>
      <Link to={"/topics"}>Topics</Link>
      <Link to={"/"}>Post New Article</Link>
    </nav>
  );
};

export default Nav;
