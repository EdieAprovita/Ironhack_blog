const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Write a title for the article'],
    },

    article: {
      type: String,
      required: [true, 'Please insert the article'],
    },

    authorName: {
      type: String,
      required: [true, 'Please write the author name'],
    },
  },

  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

const Articles = mongoose.model('Article', articleSchema);
module.exports = Articles;
