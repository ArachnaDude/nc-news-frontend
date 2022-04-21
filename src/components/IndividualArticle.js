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

  const [error, setError] = useState(null);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((singleArticle) => {
        setCurrentArticle(singleArticle);
      })
      .catch((err) => {
        setError(err);
        console.log(error, "IndividualArticle component");
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

  if (error) {
    return <h4>{console.log("h4 individual article")}</h4>;
  }

  return isLoading ? (
    <p className="loadingMessage">Loading article</p>
  ) : (
    <>
      <section className="individualArticle">
        <h2>{currentArticle.title}</h2>
        <p>{currentArticle.body}</p>
        <p>
          This article has a popularity of {currentArticle.votes + localVote}{" "}
        </p>

        {!loggedInUser.username ? (
          <p className="individualArticle__warning">
            Please log in to vote or comment
          </p>
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
              <CommentForm setComments={setComments} />
            </ExpandableCommentButton>
          </>
        )}
      </section>

      <section className="commentSection">
        <ul className="commentSection__list">
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
