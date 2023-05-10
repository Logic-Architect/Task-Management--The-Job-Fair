const express = require('express');
const router =express.Router();
const passport =require('passport');

const authorController = require('../controllers/authorController');

// AUTHOR HOME PAGE
router.get('/',passport.checkAuthorAuthentication,authorController.home);

// AUTHOR SIGN IN 
router.get('/sign-in',authorController.signIn);

// AUTHOR CREATE SESSION 
router.get('/create-session',passport.authenticate(
    'local',
    {
        failureRedirect : '/author/sign-in',
    }
),authorController.createSession)

// AUTHOR SIGN OUT 
router.get('/sign-out',passport.checkAuthorAuthentication,authorController.signOut);

// RENDER SIGN UP PAGE 
router.get('/sign-up',authorController.signUp)

// AUTHOR VERIFICAION FORM SUBMISSION
router.post('/verify',authorController.verify)

// RENDER THE SECURE KEY FORM PAGE 
router.get('/secure-key',authorController.secureKey)

// SECURE KEY FORM SUBMISSION

router.post('/verify-secure-key',authorController.verifySecureKey);

router.use('/author-action',passport.checkAuthorAuthentication,require('./author-action'))

// authors xhr requests
router.use('/xhr',passport.checkAuthorAuthentication,require('./xhr'))

module.exports = router;