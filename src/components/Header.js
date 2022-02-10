import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/user";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <h3>The best website on localhost:3000</h3>
      <span>
        Logged in as: <strong>{loggedInUser.username}</strong>{" "}
        <img
          src={loggedInUser.avatar_url}
          alt="profilepic"
          height={35}
          width={35}
        />
      </span>
    </>
  );
};

export default Header;
