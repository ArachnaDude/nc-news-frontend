import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  return (
    <li className="topicCard">
      <p>
        <Link to={`/articles?topic=${topic.slug}`}>
          <strong>{topic.slug}</strong>
        </Link>{" "}
        - {topic.description}
      </p>
    </li>
  );
};

export default TopicCard;
