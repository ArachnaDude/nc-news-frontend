import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, getComments, patchArticleVotes } from "../utils/api";
import Comment from "./Comment";
import { UserContext } from "../contexts/user";
import ExpandableCommentButton from "./ExpandableCommentButton";
import CommentForm from "./CommentForm";

const IndividualArticle = () => {
  const { loggedInUser } = useContext(UserContext);

  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [localVote, setLocalVote] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id).then((singleArticle) => {
      setCurrentArticle(singleArticle);
    });
    getComments(article_id).then((comments) => {
      setComments(comments);
    });

    setIsLoading(false);
  }, [article_id]);

  const handleVotes = (clickDirection) => {
    setLocalVote((currentValue) => {
      return currentValue + clickDirection;
    });
    patchArticleVotes(article_id, clickDirection);
  };

  return isLoading ? (
    <p>Loading article {console.log("loading article")}</p>
  ) : (
    <>
      <h2>{currentArticle.title}</h2>
      <p>{currentArticle.body}</p>
      <p>
        This article has a popularity of {currentArticle.votes + localVote}{" "}
      </p>

      {!loggedInUser.username ? (
        <p>Please log in to vote or comment</p>
      ) : (
        <>
          <p>Did you enjoy this content, {loggedInUser.username}?</p>
          <button
            onClick={() => {
              handleVotes(1);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              handleVotes(-1);
            }}
          >
            No
          </button>
          <ExpandableCommentButton>
            <CommentForm />
          </ExpandableCommentButton>
        </>
      )}

      <section>
        <ul>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment.comment_id}
                comment={comment}
                comments={comments}
                setComments={setComments}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default IndividualArticle;
