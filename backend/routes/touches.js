const express = require('express');
const router = express.Router();
const touchesCtrl = require('../controllers/touches');
const commentsCtrl = require('../controllers/comments');

//all paths start w/'api/touches'

// GET /api/touches --> INDEX functionality 
router.get('/', touchesCtrl.index);

// GET /touches/:touchId --> SHOW FUNCTIONALITY 
router.get('/:touchId', touchesCtrl.show);

// POST /touches --> CREATE FUNCTIONALITY 
router.post('/', touchesCtrl.create); 

// POST /touches/:touchId/comments --> COMMENT --- CREATE FUNCTIONALITY
router.post('/:touchId/comments', commentsCtrl.create); 

// PUT /touches/:touchId --> UPDATE FUNCTIONALITY
router.put('/:touchId', touchesCtrl.update); 

// PUT /touches/:touchId/comments/:comment Id --> COMMENT - UPDATE FUNCTIONALITY 
router.put('/:touchId/comments/:commentId', commentsCtrl.update);

// DELETE /touches/:touchId --> DELETE FUNCTIONALITY
router.delete('/:touchId',touchesCtrl.touchesDelete); 

// DELETE 
router.delete('/:touchId/comments/:commentId', commentsCtrl.deleteComment); 

module.exports = router;