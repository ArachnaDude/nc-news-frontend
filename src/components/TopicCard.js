import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  return (
    <li>
      <h4>
        <Link to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link>
      </h4>
      <p>{topic.description}</p>
    </li>
  );
};

export default TopicCard;
