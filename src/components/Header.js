import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/user";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const guestUser = {
    username: "guest",
    name: "none",
    avatar_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/640px-SNice.svg.png",
  };
  return (
    <>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <h3>The best website on localhost:3000</h3>

      {!loggedInUser.username ? (
        <button
          onClick={() => {
            setLoggedInUser(guestUser);
          }}
        >
          Log in
        </button>
      ) : (
        <span>
          Logged in as:
          <strong>{loggedInUser.username}</strong>{" "}
          <img
            src={loggedInUser.avatar_url}
            alt="profilepic"
            height={35}
            width={35}
          />
          <button
            onClick={() => {
              setLoggedInUser({});
            }}
          >
            Log out
          </button>
        </span>
      )}
    </>
  );
};

export default Header;
