import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://nc-news-full-backend.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return newsAPI.get("/articles", { params: { topic } }).then((result) => {
    return result.data.articles;
  });
};
