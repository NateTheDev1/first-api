const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GETS ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMITS A POST

// router.post("/", (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description,
//   });
//   post
//     .save()
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => res.json(err));
// });

// ALSO FINE BELOW
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// FIND POST BY ID
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE POST

router.delete("/:postId", async (req, res) => {
  try {
    const res = await Post.remove({ _id: req.params.postId });
    res.json(res);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
