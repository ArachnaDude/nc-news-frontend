import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // searchParams is a hook to read query strings
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(searchParams.get("topic")).then((articlesFromApi) => {
      setArticleList(articlesFromApi);
      setIsLoading(false);
    });
  }, [searchParams]);

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
