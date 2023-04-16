const express = require('express');
const router = express.Router();

const teamInfoController = require('../controllers/teamInfoController');

router.get('/',teamInfoController.home)

module.exports = router