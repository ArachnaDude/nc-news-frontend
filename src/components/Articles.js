import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articleList, setArticleList] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [direction, setDirection] = useState("desc");

  //error handling
  const [error, setError] = useState(null);

  const handleChangeSort = (event) => {
    setSortBy(event.target.value);
  };

  const handleChangeOrder = (event) => {
    setDirection(event.target.value);
  };

  // searchParams is a hook to read query strings
  // as "topic" is the query, we use the .get to extract
  // what the topic is from the URL.
  // e.g /articles?topic=football in the URL,
  // the topic variable = "football"
  const [searchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    getArticles(topic, sortBy, direction)
      .then(({ data }) => {
        console.log(data, "proper articles");
        setArticleList(data.articles);
      })
      .catch(({ response }) => {
        console.log(response, "catch block");
        setError({ status: response.status, message: response.data.msg });
      });
    setIsLoading(false);
  }, [topic, sortBy, direction]);

  if (error) {
    return <ErrorPage status={error.status} message={error.message} />;
  }

  return isLoading ? (
    <p className="loadingMessage">
      Be with you in a second!{console.log("loading your content")}
    </p>
  ) : (
    <>
      <label>
        Sort By
        <select value={sortBy} onChange={handleChangeSort}>
          <option value="created_at">Date Created</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label>
        Change Order
        <select value={direction} onChange={handleChangeOrder}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>

      <ul className="articleList">
        {articleList.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </>
  );
};

export default Articles;
