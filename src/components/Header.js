import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/user";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const guestUser = {
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
  };
  return (
    <>
      <Link to="/">
        <h1>NC News</h1>
      </Link>

      <h3>The best website on localhost:3000</h3>

      {!loggedInUser.username ? (
        <span>
          Don't forget to log in!
          <button
            onClick={() => {
              setLoggedInUser(guestUser);
            }}
          >
            Log in
          </button>
        </span>
      ) : (
        <span>
          Logged in as: <strong>{loggedInUser.username}</strong>{" "}
          <img
            src={loggedInUser.avatar_url}
            alt="profilepic"
            height={20}
            width={20}
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
