import { useNavigate } from "react-router-dom";
const ErrorPage = ({ status, message }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="genericMessage">
      <p>
        <strong>{status || 404} error:</strong> {message || "page not found"}
      </p>
      <button onClick={handleClick}>Click here to go back</button>
    </div>
  );
};

export default ErrorPage;
