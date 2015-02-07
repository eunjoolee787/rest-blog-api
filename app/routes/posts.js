var express = require('express');
var router = express.Router();

var Post = require('../models/post');

/**
 * This is an example of how to use the express router
 * It is very similar to app.get!
 *
 * router.get('/', function(req, res){
 *   res.json({"Hello": "World!"})
 * });
 */

//GET posts
router.get("/", function(req, res) {
  Post.find({}, function (err, posts) {
    res.json(posts);
  });
});


//GET /posts/:id
router.get("/:id", function (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return handleError (err);
    if (post) {
      res.json(post);
    }
  });
});

//PUT /posts/:id
router.put("/:id", function (req, res) {
  var post = {
    title: req.body.title,
    content: req.body.content
  };
  Post.findByIdAndUpdate(req.params.id, post, function (err, post){
    if(err) {
      return console.log(err);
    }
    res.json(post);
  });
});

//POST /Post
router.post("/", function (req, res) {
  var object_post = {
    title: req.body.title,
    content: req.body.content,
    user: {
      username: "Testing2",
      id: "54d5a199d47183cd0eb367a2"
    },
    comments: []
  };
  var new_post = new Post(object_post);
    new_post.save(function (err, post) {
      if(err) {
        throw err;
      }
      res.json(post);
    });
});

//DELETE /Post/:id
router.delete("/:id", function (req, res) {
  Post.findByIdAndRemove(req.params.id, function (err) {
    if(err) {
      return console.log(err);
    }
    res.json({
      "success": "true",
      "message": "Post was successfully deleted"
    });
  });
});

module.exports = router;
