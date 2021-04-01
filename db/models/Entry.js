const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  mood: {
    type: String,
    enum: ['rad', 'good', 'meh', 'bad', 'awful']
  },
},{
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

const Entry = mongoose.model('Entry', journalSchema);


module.exports = Entry;

