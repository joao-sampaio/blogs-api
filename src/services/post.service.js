const { BlogPost, PostCategory, sequelize } = require('../models');

const newPost = async (title, content, categoryIds, user) => {
  if (!title || !content) {
    return { type: 400, message: 'Some required fields are missing' };
  }
  // const t = await sequelize.transaction()
  // try {
  const result = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create({
      title, content, userId: user.id,
    }, { transaction: t });
    const inserts = categoryIds.map(async (catId) => 
        PostCategory.create({ postId: post.id, categoryId: catId }, { transaction: t }));

    await Promise.all(inserts);

    return post;
  });
  return result;
  // } catch (error) {
  //   throw error;
  // }
};

// const findAll = async () => {
//   const posts = await BlogPosts.findAll();
//   return posts;
// };

module.exports = {
  newPost,
};