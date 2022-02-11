import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

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
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default Articles;
