import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/user";

const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  return (
    <div className="headerDiv">
      <Link to="/">
        <h1 className="headerDiv__h1">NC News</h1>
      </Link>

      <h3 className="headerDiv__h3">The best website on localhost:3000</h3>

      {!loggedInUser.username ? (
        <span className="headerDiv__login">
          Don't forget to{" "}
          <strong>
            <Link to="/login">log in!</Link>
          </strong>
        </span>
      ) : (
        <span className="headerDiv__loggedIn">
          Logged in as:{" "}
          <strong>
            <Link to={`users/${loggedInUser.username}`}>
              {loggedInUser.username}
            </Link>
          </strong>{" "}
          <img
            className="headerDiv__profilePic"
            src={loggedInUser.avatar_url}
            alt="profilepic"
          />
          <button
            className="headerDiv__button"
            onClick={() => {
              setLoggedInUser({});
            }}
          >
            Log out
          </button>
        </span>
      )}
    </div>
  );
};

export default Header;
