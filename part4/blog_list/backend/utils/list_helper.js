const _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.length === 0 ? 0 : blogs.reduce((acc, i) => acc + i.likes, 0);
};

const favoriteBlog = (blogs) => {
  const max = Math.max(...blogs.map((blog) => blog.likes));
  return blogs.find((blog) => blog.likes === max);
};

const mostBlogs = (blogs) => {
  return _.chain(blogs)
    .countBy("author")
    .map((value, key) => ({ author: key, blogs: value }))
    .maxBy("blogs")
    .value();
};

const mostLikes = (blogs) => {
  const authorLikes = _.mapValues(_.groupBy(blogs, "author"), (object) =>
    _.sumBy(object, "likes"),
  );
  return _.chain(authorLikes)
    .map((value, key) => ({ author: key, likes: value }))
    .maxBy("likes")
    .value();
};

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes };
