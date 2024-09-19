const Touch = require('../models/touch.js');
const checkToken = require('../middleware/checkToken.js');

module.exports = {
    index,
    show, 
    create,
    update,
    touchesDelete,
}

// INDEX FUNCTIONALITY 
 async function index(req, res) {
      console.log("getting all sessions");
    try {
      const touches = await Touch.find({})
        .sort({ createdAt: 'desc' });
      res.status(200).json(touches);
    } catch (error) {
      res.status(500).json(error);
    }
  };

// SHOW FUNCTIONALITY 
async function show(req, res) {
    try {
      const touch = await Touch.findById(req.params.touchId);
      res.status(200).json(touch);
    } catch (error) {
      res.status(500).json(error);
    }
  };

// CREATE FUNCTIONALITY 
 async function create(req, res) {
    console.log(req.user);
    console.log(req.body);
    try {
      req.body.author = req.user._id;
      const touch = await Touch.create(req.body);
      touch._doc.author = req.user;
      res.status(201).json(touch);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  };

// UPDATE FUNCTIONALITY
async function update(req, res) {
    try {
      // Find the touch:
      const touch = await Touch.findById(req.params.touchId);
  
      // Check permissions:
      if (!touch.author.equals(req.user._id)) {
        return res.status(403).send("You're not allowed to do that!");
      }
  
      // Update touch:
      const updatedTouch = await Touch.findByIdAndUpdate(
        req.params.touchId,
        req.body,
        { new: true }
      );
  
      // Append req.user to the author property:
      updatedTouch._doc.author = req.user;
  
      // Issue JSON response:
      res.status(200).json(updatedTouch);
    } catch (error) {
      res.status(500).json(error);
    }
  };

// DELETE FUNCTIONALITY
 async function touchesDelete(req, res) {
    try {
      const touch = await Touch.findById(req.params.touchId);
  
      if (!touch.author.equals(req.user._id)) {
        return res.status(403).send("You're not allowed to do that!");
      }
  
      const deletedTouch = await Touch.findByIdAndDelete(req.params.touchId);
      res.status(200).json(deletedTouch);
    } catch (error) {
      res.status(500).json(error);
    }
  };