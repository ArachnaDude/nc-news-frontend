import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, getComments, patchArticleVotes } from "../utils/api";
import Expandable from "./Expandable";
import Comment from "./Comment";
import { UserContext } from "../contexts/user";

const IndividualArticle = () => {
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser, "INDIVIDUAL ARTICLE LOGGED IN USER");

  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [localVote, setLocalVote] = useState(0);

  useEffect(() => {
    getSingleArticle(article_id).then((singleArticle) => {
      setCurrentArticle(singleArticle);
    });
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  const handleVotes = (clickDirection) => {
    setLocalVote((currentValue) => {
      return currentValue + clickDirection;
    });
    patchArticleVotes(article_id, clickDirection);
  };

  return (
    <>
      <h2>{currentArticle.title}</h2>
      <p>{currentArticle.body}</p>
      <p>
        This article has a popularity of {currentArticle.votes + localVote}{" "}
      </p>
      <p>Did you enjoy this content?</p>
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
      {loggedInUser ? <button>post a comment</button> : null}

      <section>
        <ul>
          {comments.map((comment) => {
            return <Comment key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default IndividualArticle;
