import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/user";
import { postComment } from "../utils/api";

const CommentForm = () => {
  const { article_id } = useParams();

  const [input, setInput] = useState("");
  const { loggedInUser } = useContext(UserContext);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validComment = /\S+./.test(input);

    console.log(input, loggedInUser.username, validComment);
    if (validComment) {
      postComment(article_id, loggedInUser.username, input).then((res) => {
        console.log(res);
      });
    }
    setInput("");
  };

  console.log(input, "input");
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          value={input}
          placeholder="Share your insight, genius"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Post comment</button>
    </form>
  );
};

export default CommentForm;
