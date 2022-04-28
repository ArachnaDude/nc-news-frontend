import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user";
import { getUserProfile } from "../utils/api";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const { setLoggedInUser } = useContext(UserContext);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`submitting ${input}`);
    getUserProfile(input).then((res) => {
      setLoggedInUser(res);
    });
    navigate("/");

    // add some conditional logic here - if successful navigate home
  };
  return (
    <>
      <p>Logged in users can vote and comment on articles</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
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
          Password: <input type="password" placeholder="Password" required />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
      <p>
        For demo purposes log in with: <br />
        username: jessjelly
        <br />
        password: admin
      </p>
    </>
  );
};
export default Login;
