import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <h3>The best website on localhost:3000</h3>
    </>
  );
};

export default Header;
