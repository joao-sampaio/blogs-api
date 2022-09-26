const { posts } = require('../services');

const newPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { user } = req;
    const result = await posts.newPost(title, content, categoryIds, user);
    if (result.type) {
      res.status(result.type).json({ message: result.message });
    } else {
      res.status(201).json(result);
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

module.exports = {
  newPost,
};