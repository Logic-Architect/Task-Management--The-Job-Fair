const express = require('express');
const router =express.Router();
const passport =require('passport');

const authorController = require('../controllers/authorController');

router.get('/',authorController.home)
router.get('/sign-in',authorController.signIn)

router.get('/sign-up',authorController.signUp)
router.post('/verify',authorController.verify)
router.get('/secure-key',authorController.secureKey)
router.post('/verify-secure-key',authorController.verifySecureKey);

module.exports = router;