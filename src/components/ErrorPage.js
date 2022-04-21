const ErrorPage = ({ status, message }) => {
  return (
    <>
      <p>
        <strong>{status || 404} error:</strong> {message || "page not found"}
      </p>
    </>
  );
};

export default ErrorPage;
