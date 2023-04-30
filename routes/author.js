const express = require('express');
const router =express.Router();
const passport =require('passport');

const authorController = require('../controllers/authorController');

router.get('/',authorController.home)

module.exports = router;