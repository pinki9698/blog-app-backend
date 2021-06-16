var express = require("express");
var router = express.Router();

const { createPost,getPostById,readPost,readAllPosts,updatePost,removePost} = require("../controllers/post");

//create category route
router.post("/publish", createPost);

//get category by param
router.param("postId", getPostById)

// //Read category route
router.get("/post/:postId", readPost);
router.get("/posts", readAllPosts);


// Update posts
router.put("/post/:postId", updatePost);

//Delete posts
router.delete("/post/:postId", removePost);


module.exports = router;