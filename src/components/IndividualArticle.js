import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, getComments, patchArticleVotes } from "../utils/api";
import Comment from "./Comment";
import { UserContext } from "../contexts/user";
import ExpandableCommentButton from "./ExpandableCommentButton";
import CommentForm from "./CommentForm";
import ErrorPage from "./ErrorPage";

const IndividualArticle = () => {
  const { loggedInUser } = useContext(UserContext);

  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [localVote, setLocalVote] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  // the api call returns the entire object because the catch
  // block here requires different key/value pairs - we have to set
  // the article using dot notation here instead of returning it
  // from the api call

  useEffect(() => {
    getSingleArticle(article_id)
      .then(({ data }) => {
        setCurrentArticle(data.article);
      })
      .catch(({ response }) => {
        setError({ status: response.status, message: response.data.msg });
      });
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch(({ response }) => {
        console.log(response, "comment response catchBlock");
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
    return <ErrorPage status={error.status} message={error.message} />;
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
