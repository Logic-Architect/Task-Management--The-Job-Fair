const express = require('express');
const router = express.Router();

const companyController = require('../controllers/companyController');

router.get('/',companyController.home);
router.post('/create',companyController.create);
router.get('/create-session',companyController.createSession);

module.exports = router