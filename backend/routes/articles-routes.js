const express = require('express');
const router = express.Router();
const {
  getArticle,
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/articles');

//CRUD ARTICLES

router.get('/', getAllArticles);
router.get('/:id', getArticle);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

module.exports = router;
