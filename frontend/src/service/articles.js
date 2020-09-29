import axios from 'axios';

const baseURL = 'http://localhost:5000/articles';

const articleService = axios.create({
  baseURL,
  withCredentials: true,
});

export const createArticle = (article) => {
  return articleService.post('/', article);
};

export const getAllArticles = () => {
  return articleService.get('/');
};

export const getArticle = (articleId) => {
  return articleService.get(`/${articleId}`);
};

export const editBlog = (articleId, articleEdited) => {
  return articleService.put(`/${articleId}`, articleEdited);
};

export const deleteArticle = (articleId) => {
  return articleService.delete(`/${articleId}`);
};
