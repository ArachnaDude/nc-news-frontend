import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://nc-news-full-backend.herokuapp.com/api",
});

// TO DO destructure result into data and response for catch blocks

export const getArticles = (topic, sort_by, order) => {
  return newsAPI
    .get("/articles", { params: { topic, sort_by, order } })
    .then((result) => {
      return result.data.articles;
    });
};

export const getTopics = () => {
  return newsAPI.get("/topics").then((result) => {
    return result.data.topics;
  });
};

// this call returns the entire object to be able to utilise error handling
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

export const getUserProfile = (username) => {
  return newsAPI.get(`/users/${username}`).then((result) => {
    return result.data.user;
  });
};

export const postComment = (article_id, commentObj) => {
  return newsAPI
    .post(`articles/${article_id}/comments`, commentObj)
    .then((result) => {
      return result.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return newsAPI.delete(`comments/${comment_id}`).then((result) => {
    console.log("deleting comment");
    return result;
  });
};
