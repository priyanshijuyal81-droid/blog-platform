const Post = require("../models/Post");

// @desc    Create Post
// @route   POST /api/posts
// @access  Private
const createPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = await Post.create({
      title,
      content,
      author: req.user
    });

    res.status(201).json(post);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get All Posts
// @route   GET /api/posts
// @access  Public
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "username")
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get Single Post
// @route   GET /api/posts/:id
// @access  Public
const getSinglePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("author", "username");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update Post
// @route   PUT /api/posts/:id
// @access  Private
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if logged in user is author
    if (post.author.toString() !== req.user) {
      return res.status(403).json({ message: "Not authorized" });
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;

    const updatedPost = await post.save();

    res.json(updatedPost);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete Post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.author.toString() !== req.user) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await post.deleteOne();

    res.json({ message: "Post deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost
};