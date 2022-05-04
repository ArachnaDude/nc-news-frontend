import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className="genericMessage">
      <p>
        This feature is still in development. <br /> Check back soon!
      </p>
      <button onClick={handleClick}>Click here to go back</button>
    </div>
  );
};

export default ComingSoon;
