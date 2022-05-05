import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/user";
import { postComment } from "../utils/api";

const CommentForm = ({ setComments }) => {
  const { article_id } = useParams();

  const [input, setInput] = useState("");
  const { loggedInUser } = useContext(UserContext);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validComment = /\S+./.test(input);
    const commentObj = { username: loggedInUser.username, body: input };

    if (validComment) {
      postComment(article_id, commentObj).then((res) => {
        console.log(res, "res");
        setComments((currentComments) => {
          return [res, ...currentComments];
        });
      });
    }
    setInput("");
  };

  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <label>
        <p className="commentForm__description">Leave a comment</p>
        <input
          className="commentForm__textbox"
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
