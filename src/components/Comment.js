import { useState } from "react";
import { patchCommentVotes } from "../utils/api";

const Comment = ({ comment }) => {
  const [localVote, setLocalVote] = useState(0);
  const handleClick = () => {
    console.log("click");
    setLocalVote((currentValue) => {
      return currentValue + 1;
    });
    patchCommentVotes(comment.comment_id);
  };
  return (
    <li key={comment.comment_id}>
      <p>
        <strong>{comment.author}</strong> at {comment.created_at}
      </p>
      <p>{comment.body}</p>
      <p>{comment.votes + localVote} votes</p>
      <button onClick={handleClick}>upvote this comment</button>
    </li>
  );
};

export default Comment;
