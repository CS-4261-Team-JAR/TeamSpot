const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  },
  status: {
    remaining: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Posts', PostSchema);