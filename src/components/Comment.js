import { useState, useContext } from "react";
import { patchCommentVotes } from "../utils/api";
import { UserContext } from "../contexts/user";

const Comment = ({ comment }) => {
  const { loggedInUser } = useContext(UserContext);

  const [localVote, setLocalVote] = useState(0);
  const handleClick = () => {
    console.log("click");
    setLocalVote((currentValue) => {
      return currentValue + 1;
    });
    patchCommentVotes(comment.comment_id, 1);
  };

  return (
    <li key={comment.comment_id}>
      <p>
        <strong>{comment.author}</strong> at {comment.created_at}
      </p>
      <p>{comment.body}</p>
      <p>{comment.votes + localVote} votes</p>
      {loggedInUser.username === comment.author ? null : (
        <button onClick={handleClick}>upvote this comment</button>
      )}

      {loggedInUser.username === comment.author ? (
        <button>delete comment</button>
      ) : null}
    </li>
  );
};

export default Comment;
