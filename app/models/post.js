var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require("./user.js");
/**
 * Post Schema
 * title {String}   - the title of the post
 * content {String} - the content of the post
 * user {User}      - the user who made the post
 * comments {[Comments]} - the comments on the post
 *
 * _Comments will be an object with the attributes:
 * content {String}
 * user {User}
 */
var postSchema = new Schema({
  title: String,
  content: String,
  user: {
    username: String,
    id: Schema.Types.ObjectId
  },
  comments: [{ 
    content: String,
    user: {
      username: String,
      id: Schema.Types.ObjectId
    }
  }]
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
