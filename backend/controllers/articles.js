const Article = require('../models/Article');

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json({ message: 'This are all the articles', articles });
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};

exports.getArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);
    res
      .status(200)
      .json({ message: `This is the you request article:${article}` });
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const { title, article, authorName } = req.body;

    const articled = await Article.create({
      title,
      article,
      authorName,
    });

    res
      .status(201)
      .json({ message: `This is the new article you created: ${articled}` });
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, article, authorName } = req.body;

    const articled = await Article.findByIdAndUpdate(id, {
      title,
      article,
      authorName,
    });

    res
      .status(200)
      .json({ message: `This is the updated article: ${articled}` });
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    await Article.findByIdAndDelete(id);
    res.status(200).json({ message: 'deleted article' });
  } catch (error) {
    res.status(400).json({ message: `${error}` });
  }
};
