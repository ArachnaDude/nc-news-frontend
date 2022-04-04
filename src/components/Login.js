import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`submitting ${input}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={input}
            type="text"
            placeholder="Username"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password: <input type="password" placeholder="Password" />
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
