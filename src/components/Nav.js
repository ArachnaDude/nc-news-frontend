import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navBar">
      Topics: <Link to="/articles/topics/football">Football</Link> |{" "}
      <Link to="/articles/topics/cooking">Cooking</Link> |{" "}
      <Link to="/articles/topics/coding">Coding</Link>
    </nav>
  );
};

export default Nav;
