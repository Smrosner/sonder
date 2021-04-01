const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true
  },
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  mood: {
    type: String,
    required: true,
    enum: ['rad', 'good', 'meh', 'bad', 'awful']
  }
},{
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true
  },
  firstName: {
    type: String,
    required: [true, "Please provide first name"]
  },
  lastName: {
    type: String,
    required: [true, "Please provide last name"]
  },
  email: {
    type: String,
    required: true,
    match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill valid email address'],
    unique: true
  },
  entries: [entrySchema]
});

const User = mongoose.model('User', userSchema);


module.exports = User;

// const entrySchema = new mongoose.Schema({
//   id: {
//     type: Number,
//     index: true
//   },
//   title: {
//     type: String,
//   },
//   body: {
//     type: String,
//   },
//   mood: {
//     type: String,
//     required: true,
//     enum: ['rad', 'good', 'meh', 'bad', 'awful']
//   }
// },{
//   timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
// });

// const userSchema = new mongoose.Schema({
//   id: {
//     type: Number,
//     index: true
//   },
//   firstName: {
//     type: String,
//     required: [true, "Please provide first name"]
//   },
//   lastName: {
//     type: String,
//     required: [true, "Please provide last name"]
//   },
//   email: {
//     type: String,
//     required: true,
//     match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill valid email address'],
//     unique: true
//   },
//   entries: {
//     [entrySchema]
//   }
// });