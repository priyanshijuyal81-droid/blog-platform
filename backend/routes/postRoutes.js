const express = require("express");
const protect = require("../middleware/authMiddleware");

const {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost
} = require("../controllers/postController");

const router = express.Router();

// Routes for /api/posts
router.route("/")
  .post(protect, createPost)   // Create Post (Protected)
  .get(getAllPosts);           // Get All Posts (Public)

// Routes for /api/posts/:id
router.route("/:id")
  .get(getSinglePost)          // Get Single Post (Public)
  .put(protect, updatePost)    // Update Post (Protected)
  .delete(protect, deletePost); // Delete Post (Protected)

module.exports = router;