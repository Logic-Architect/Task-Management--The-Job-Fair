// CONFIGURING ROUTER 
const express = require('express');
const router = express.Router();

console.log('Router started successfully');

const homecontroller = require('../controllers/homeController.js')

router.get('/',homecontroller.home);
router.use('/student',require('./student'));
router.use('/company',require('./company'));
router.use('/team-info',require('./team-info'))

// eXPORTING ROUTER 
module.exports = router;