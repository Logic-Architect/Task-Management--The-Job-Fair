const express = require('express');
const router =express.Router();

const xhrController = require('../controllers/xhrController');

router.get('/view-company',xhrController.viewCompany)

module.exports = router;