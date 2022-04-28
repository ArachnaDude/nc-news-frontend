import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
import TopicCard from "./TopicCard";

const TopicList = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [topicsList, setTopicsList] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromAPI) => {
      setTopicsList(topicsFromAPI);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p className="loadingMessage">
      Loading topics{console.log("loading topics")}
    </p>
  ) : (
    <ul>
      {topicsList.map((topic) => {
        return <TopicCard key={topic.slug} topic={topic} />;
      })}
    </ul>
  );
};

export default TopicList;
