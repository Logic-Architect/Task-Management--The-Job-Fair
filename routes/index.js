// CONFIGURING ROUTER 
const express = require('express');
const router = express.Router();

console.log('Router started successfully');

const homeController = require('../controllers/homeController.js')

router.get('/',homeController.home);
router.get('/sign-in',homeController.signIn)
router.get('/sign-up',homeController.signUp)
router.use('/student',require('./student'));
router.use('/company',require('./company'));
router.use('/team-info',require('./team-info'))


router.use('/author',require('./author'))

// eXPORTING ROUTER 
module.exports = router;