import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, getComments, patchArticleVotes } from "../utils/api";
import Expandable from "./Expandable";

import Comment from "./Comment";

const IndividualArticle = () => {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getSingleArticle(article_id).then((singleArticle) => {
      setCurrentArticle(singleArticle);
    });
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  return (
    <>
      <h2>{currentArticle.title}</h2>
      <p>{currentArticle.body}</p>
      <p>This article has a popularity of {currentArticle.votes} </p>
      <p>Did you enjoy this content?</p>
      <button>Up</button>
      <button>Down</button>
      <button>post a comment</button>

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
