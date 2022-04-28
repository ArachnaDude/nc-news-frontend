import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user";

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
    if (input === "jessjelly") {
      setInput("");
      setLoggedInUser({
        username: "jessjelly",
        name: "Jess Jelly",
        avatar_url:
          "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
      });
      navigate("/");
    }

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
