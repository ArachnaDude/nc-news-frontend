import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // searchParams is a hook to read query strings
  // as "topic" is the query, we use the .get to extract
  // what the topic is from the URL.
  // e.g /articles?topic=football in the URL,
  // the topic variable = "football"
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  const sortBy = searchParams.get("sort_by");
  const direction = searchParams.get("order");

  useEffect(() => {
    getArticles(topic, sortBy, direction).then((articlesFromApi) => {
      setArticleList(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic, sortBy, direction]);

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
