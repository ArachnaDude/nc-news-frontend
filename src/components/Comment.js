import { useState, useContext, useEffect } from "react";
import { patchCommentVotes } from "../utils/api";
import { UserContext } from "../contexts/user";
import { Link } from "react-router-dom";
import { deleteComment } from "../utils/api";
import moment from "moment";

const Comment = ({ comment, comments, setComments }) => {
  const { loggedInUser } = useContext(UserContext);

  const [localVote, setLocalVote] = useState(0);

  const [disableUpvote, setDisableUpvote] = useState(false);
  const [disableDownvote, setDisableDownvote] = useState(false);

  const handleDelete = () => {
    const filteredComments = comments.filter((c) => {
      return c.comment_id !== comment.comment_id;
    });
    setComments(filteredComments);
    deleteComment(comment.comment_id);
  };

  const handleVotes = (clickDirection) => {
    setLocalVote((currentValue) => {
      return currentValue + clickDirection;
    });
    patchCommentVotes(comment.comment_id, clickDirection);
  };

  return (
    <li className="commentCard" key={comment.comment_id}>
      <p>
        <strong>
          <Link to={`/users/${comment.author}`}>{comment.author}</Link>
        </strong>{" "}
        on {moment(comment.created_at).format("MMMM Do, YYYY")}
      </p>
      <p>{comment.body}</p>
      <p>
        <strong>{comment.votes + localVote}</strong> votes
      </p>

      {!loggedInUser.username ||
      loggedInUser.username === comment.author ? null : (
        <>
          <button
            disabled={disableUpvote}
            onClick={() => {
              handleVotes(1);
              setDisableUpvote(true);
              if (disableDownvote) {
                handleVotes(1);
                setDisableDownvote(false);
              }
            }}
          >
            upvote this comment
          </button>
          <button
            disabled={disableDownvote}
            onClick={() => {
              handleVotes(-1);
              setDisableDownvote(true);
              if (disableUpvote) {
                handleVotes(-1);
                setDisableUpvote(false);
              }
            }}
          >
            downvote this comment
          </button>
        </>
      )}

      {loggedInUser.username === comment.author ? (
        <button
          onClick={() => {
            handleDelete();
          }}
        >
          delete comment
        </button>
      ) : null}
    </li>
  );
};

export default Comment;
