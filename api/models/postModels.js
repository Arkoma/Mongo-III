const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

require('./userModels')

const PostSchema = new mongoose.Schema({
  author:{
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  comments: [String]
});

const PostModel = mongoose.model('BlogMonkeys', PostSchema);

module.exports = PostModel;