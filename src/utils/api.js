import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://nc-news-full-backend.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return newsAPI.get("/articles", { params: { topic } }).then((result) => {
    return result.data.articles;
  });
};

export const getSingleArticle = (article_id) => {
  return newsAPI.get(`/articles/${article_id}`).then((result) => {
    return result.data.article;
  });
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

// export const patchArticleVotesDown = (article_id) => {
//   return newsAPI
//     .patch(`articles/${article_id}`, { inc_votes: -1 })
//     .then((result) => {
//       console.log(result.data.article.votes);
//     });
// };

export const patchCommentVotes = (comment_id) => {
  return newsAPI
    .patch(`/comments/${comment_id}`, { inc_votes: 1 })
    .then((result) => {
      return result.data.comment;
    });
};
