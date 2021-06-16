const Post = require("../models/post");
const { check, validationResult } = require("express-validator");
const post = require("../models/post");

//craete category controller
exports.createPost = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  const post = new Post(req.body);
  post.save((err, post) => {
    if (err) {
      return res.status(400).json({
        err: "Not able to save message in DB"
      });
    }
    res.json(
      req.body  
    );
  });
};

exports.updatePost = (req, res) => {
  const post = req.post;
  post.title = req.body.title;
  post.content = req.body.content;
  post.conclusion = req.body.conclusion;
  post.category = req.body.category;
 



  post.save((err, updatedPost) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
      
        error: "Failed to update post"
      });
    }
    res.json(updatedPost);
  });
};

//param extracter middleware
exports.getPostById = (req, res, next, id) => {
    Post.findById(id).populate("category").exec((err, post) => {
      if (err) {
        return res.status(400).json({
          error: "Post not found in DB"
        });
      }
      req.post = post;
      
      next();
    });
  };

exports.readAllPosts = (req,res)=>{
    Post.find().exec((err,items)=>{
        if(err){
            return res.status(400).json({
                error: "No posts found"
            });
        }else{
          
          res.json(items);
        }
        
    })
};

exports.readPost = (req,res)=>{
return res.status(200).json(req.post);
};


  
  exports.removePost = (req, res) => {
    const post = req.post;
  
    post.remove((err, post) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this post"
        });
      }
      res.json({
        message: "Successfully deleted"
      });
    });
  };