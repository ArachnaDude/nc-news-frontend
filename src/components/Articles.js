import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../utils/api";

const Articles = () => {
  const [articleList, setArticleList] = useState([]);

  const { topic } = useParams();
  useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
      setArticleList(articlesFromApi);
    });
  }, [topic]);

  return (
    <>
      <ul>
        {articleList.map((article) => {
          return (
            <li key={article.article_id}>
              <Link to={`articles/${article.article_id}`}>
                <h4>{article.title}</h4>
              </Link>
              <p>{article.votes} votes</p>
              <p>
                Authored by: {article.author} at {article.created_at}
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
