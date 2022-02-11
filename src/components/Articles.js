import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../utils/api";

const Articles = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic).then((articlesFromApi) => {
      setArticleList(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic]);

  return isLoading ? (
    <p>Be with you in a second!{console.log("loading your content")}</p>
  ) : (
    <>
      <ul>
        {articleList.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h4>{article.title}</h4>
              </Link>
              <p>{article.votes} votes</p>
              <p>
                Posted by{" "}
                <strong>
                  <Link to={`/users/${article.author}`}>{article.author}</Link>
                </strong>{" "}
                at {article.created_at}
              </p>
              <p>{article.comment_count} comments</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
