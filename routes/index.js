// CONFIGURING ROUTER 
const express = require('express');
const router = express.Router();

console.log('Router started successfully');

const homecontroller = require('../controllers/homeController.js')

router.get('/',homecontroller.home);

// eXPORTING ROUTER 
module.exports = router;