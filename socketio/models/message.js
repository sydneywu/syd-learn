
var mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({ 	
  message: String,
  created_at: { type: Date, default: Date.now},
});

module.exports = mongoose.model("Chat", ChatSchema);