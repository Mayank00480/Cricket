const express = require('express');
const playerController = require('../controllers/player');
const router = express.Router();

router.post('/postInfo' ,playerController.postPlayer);
router.get('/getByName/:playerName' , playerController.getByName)
router.get('/getById/:id' , playerController.getById);
router.patch('/editInfo' , playerController.updateById);
module.exports = router;

