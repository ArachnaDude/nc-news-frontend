import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user";
import { getUserProfile } from "../utils/api";
import ErrorPage from "./ErrorPage";

const User = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);
  const { username } = useParams();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    getUserProfile(username)
      .then(({ data }) => {
        setCurrentUser(data.user);
      })
      .catch(({ response }) => {
        setError({ status: response.status, message: response.data.message });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [username]);

  if (error) {
    return <ErrorPage status={error.status} message={error.message} />;
  }
  return isLoading ? (
    <p className="loadingMessage">
      Loading user profile{console.log("loading user profile")}
    </p>
  ) : (
    <div className="profilePage">
      <button onClick={handleClick}>Click here to go back</button>

      <img
        className="userProfile__picture"
        src={currentUser.avatar_url}
        alt={`${currentUser.username}'s avatar`}
      />
      {currentUser.username === loggedInUser.username ? (
        <h2 className="userProfile__username">Your Profile Page</h2>
      ) : (
        <h2 className="userProfile__username">
          {currentUser.username}'s Profile Page
        </h2>
      )}

      <p className="userProfile__name">
        <strong>Name:</strong> {currentUser.name}
      </p>

      <p>list of articles by {currentUser.username} </p>
      <p>list of comments by {currentUser.username}</p>
    </div>
  );
};

export default User;
