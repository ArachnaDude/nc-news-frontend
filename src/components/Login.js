const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form>
        <label>
          Username: <input type="text" placeholder="Username" />
        </label>
        <br />
        <label>
          Password: <input type="password" placeholder="Password" />
        </label>
        <br />
        <button>Log in</button>
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
