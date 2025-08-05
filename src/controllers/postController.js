const Post = require('../models/Post');

// Create a post
exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// Get all posts for the current user
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({ user: req.user._id });
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

// Get a single post (only if it belongs to the user)
exports.getPost = async (req, res, next) => {
  try {
    const post = await Post.findOne({ _id: req.params.id, user: req.user._id });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    next(err);
  }
};

// Update a post
exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true, runValidators: true },
    );
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    next(err);
  }
};

// Delete a post
exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted' });
  } catch (err) {
    next(err);
  }
};
