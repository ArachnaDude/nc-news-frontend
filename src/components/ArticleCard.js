import { Link, useParams } from "react-router-dom";
import moment from "moment";

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
        on {moment(article.created_at).format("MMMM Do, YYYY")}
      </p>
      <p>
        comments: {article.comment_count} | popularity: {article.votes}
      </p>
    </li>
  );
};

export default ArticleCard;
