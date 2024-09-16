const Touch = require('../models/touch.js');
const checkToken = require('../middleware/checkToken.js');

module.exports = {
    create,
    deleteComment,
    update,
}

// CREATE FUNCTIONALITY 
async function create(req, res) {
    try {
      req.body.author = req.user._id;
      const touch = await Touch.findById(req.params.touchId);
      touch.comments.push(req.body);
      await touch.save();
  
      // Find the newly created comment:
      const newComment = touch.comments[touch.comments.length - 1];
  
      newComment._doc.author = req.user;
  
      // Respond with the newComment:
      res.status(201).json(newComment);
    } catch (error) {
      res.status(500).json(error);
    }
  };

// DELETE FUNCTIONALITY 
async function deleteComment(req, res) {
  try {
    const touch = await Touch.findById(req.params.touchId);
    touch.comments.remove({ _id: req.params.commentId });
    await touch.save();
    res.status(200).json({ message: 'Ok' });
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE FUNCTIONALITY 
 async function update(req, res) {
  try {
    const touch = await Touch.findById(req.params.touchId);
    const comment = touch.comments.id(req.params.commentId);
    comment.text = req.body.text;
    await touch.save();
    res.status(200).json({ message: 'Ok' });
  } catch (err) {
    res.status(500).json(err);
  }
};