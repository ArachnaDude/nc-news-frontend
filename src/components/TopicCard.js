import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  console.log(topic);

  return (
    <li>
      <h4>{topic.slug}</h4>
      <p>{topic.description}</p>
    </li>
  );
};

export default TopicCard;
