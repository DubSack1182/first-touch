// models/touch.js
const mongoose = require('mongoose');

// embedded comment schema:
const commentSchema = new mongoose.Schema(
    {
      text: {
        type: String,
        required: true
      },
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true }
  );

//TOUCH MODULE: 
const touchSchema = new mongoose.Schema(
    {
      Session: {
        type: String,
        required: true,
        enum: ['Passing & Receiving', 'Shooting', 'Dribbling', 'Defensive', 'Conditioning', 'Goalkeeping', 'Coordination & Teamwork'],
      },
      Location: {
        type: String,
        required: true,
        enum: ['Reid Park', 'Frances Bradley Park', 'Elon Park', 'Shuffletown Park'],
      },
      Date: {
        type: String,
        required: true,
        enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      },
      Time: {
        type: String,
        required: true,
        enum: ['1:30 to 2:30', '2:30 to 3:30', '3:30 to 4:30', '4:30 to 5:30', '5:30 to 6:30', '6:30 to 7:30', '7:30 to 8:30'],
      },
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comments: [commentSchema],
    },
    { timestamps: true }
  );
  
  const Touch = mongoose.model('Touch', touchSchema);


  module.exports = Touch;