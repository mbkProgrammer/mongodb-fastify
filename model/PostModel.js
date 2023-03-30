const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  author: { type: String, required: true },
  category_id: { type: Number, required: true },
});


const posts = mongoose.model("posts", postSchema);
module.exports = posts;

// module.exports = mongoose.model('posts', PostSchema);
