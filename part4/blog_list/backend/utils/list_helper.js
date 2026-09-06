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

module.exports = { dummy, totalLikes, favoriteBlog };
