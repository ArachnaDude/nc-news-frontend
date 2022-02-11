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
    <p className="loadingMessage">
      Be with you in a second!{console.log("loading your content")}
    </p>
  ) : (
    <>
      <ul className="articleList">
        {articleList.map((article) => {
          return (
            <li className="articleCard" key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h4 className="articleList__header">{article.title}</h4>
              </Link>

              <p>
                Posted by{" "}
                <strong>
                  <Link to={`/users/${article.author}`}>{article.author}</Link>
                </strong>{" "}
                at {article.created_at}
              </p>
              <p>
                comments: {article.comment_count} | popularity: {article.votes}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
