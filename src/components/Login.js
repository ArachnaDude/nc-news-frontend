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
    getUserProfile(input)
      .then(({ data }) => {
        console.log(data.user);
        setLoggedInUser(data.user);
      })
      .then(navigate("/"))
      .catch(({ response }) => {
        console.log(response, "catchblock");
      });

    // add some conditional logic here - if successful navigate home
  };
  return (
    <>
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
    </>
  );
};
export default Login;
