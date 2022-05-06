import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://matts-nc-news-backend.herokuapp.com/api",
});

// my backend url: https://matts-nc-news-backend.herokuapp.com/api

// example url: https://nc-news-full-backend.herokuapp.com/api

// TODO - once backend is fixed & redeployed, switch over to my backend

// TO DO destructure result into data and response for catch blocks

// this call returns the entire object in order to utilise error handling
export const getArticles = (topic, sort_by, order) => {
  return newsAPI.get("/articles", { params: { topic, sort_by, order } });
};

export const getTopics = () => {
  return newsAPI.get("/topics").then((result) => {
    return result.data.topics;
  });
};

// this call returns the entire object in order to utilise error handling
export const getSingleArticle = (article_id) => {
  return newsAPI.get(`/articles/${article_id}`);
};

export const getComments = (article_id) => {
  return newsAPI.get(`/articles/${article_id}/comments`).then((result) => {
    return result.data.comments;
  });
};

export const patchArticleVotes = (article_id, votes) => {
  return newsAPI
    .patch(`/articles/${article_id}`, { inc_votes: votes })
    .then((result) => {
      return result.data.article;
    });
};

export const patchCommentVotes = (comment_id, votes) => {
  return newsAPI
    .patch(`/comments/${comment_id}`, { inc_votes: votes })
    .then((result) => {
      return result.data.comment;
    });
};

export const getAllUsers = () => {
  return newsAPI.get("/users").then((result) => {
    return result.data.users;
  });
};

// this call returns the entire object in order to utilise error handling
export const getUserProfile = (username) => {
  return newsAPI.get(`/users/${username}`);
};

export const postComment = (article_id, commentObj) => {
  return newsAPI
    .post(`articles/${article_id}/comments`, commentObj)
    .then((result) => {
      console.log(result.data);
      return result.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return newsAPI.delete(`comments/${comment_id}`).then((result) => {
    return result;
  });
};
