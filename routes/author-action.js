const express = require('express')
const router = express.Router();

const authorActionController = require('../controllers/authorActionController')
// Delete Company Registration 
router.get('/remove-company',authorActionController.removeCompany)

module.exports = router