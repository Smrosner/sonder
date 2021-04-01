const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const ToDo = mongoose.model('ToDo', todoSchema);


module.exports = ToDo;
