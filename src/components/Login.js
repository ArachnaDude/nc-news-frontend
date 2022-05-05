import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user";
import { getAllUsers, getUserProfile } from "../utils/api";
import ErrorPage from "./ErrorPage";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((result) => {
      console.log(result);
      setAllUsers(result);
    });
  }, []);

  const { setLoggedInUser } = useContext(UserContext);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // this needs to be in a useEffect somehow
  const handleSubmit = (event) => {
    event.preventDefault();

    getUserProfile(input)
      .then(({ data }) => {
        console.log(data.user);
        setLoggedInUser(data.user);
      })
      .then(navigate(-1))
      .catch(({ response }) => {
        console.log(response, "catchblock");
        setError({ status: response.status, message: response.data.message });
      });

    // add some conditional logic here - if successful navigate home
  };

  if (error) {
    return <ErrorPage status={error.status} message={error.message} />;
  }
  return (
    <div className="loginPage">
      <p>Logged in users can vote and comment on articles</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={input}
            type="text"
            placeholder="Username"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input type="password" placeholder="Password" required />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
      valid usernames: <br />
      <ul>
        <li>jessjelly</li>
        <li>happyamy2016</li>
        <li>grumpy19</li>
        <li>tickle122</li>
      </ul>
      <p>password: admin</p>
    </div>
  );
};
export default Login;
