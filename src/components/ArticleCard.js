import { Link, useParams } from "react-router-dom";

const ArticleCard = ({ article }) => {
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
};

export default ArticleCard;
