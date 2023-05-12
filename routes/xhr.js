const express = require('express');
const router =express.Router();

const xhrController = require('../controllers/xhrController');
const { get } = require('mongoose');

// from roomInfo > cells : hover 
router.get('/view-company',xhrController.viewCompany);

// from author  > _company > volunteer :click
router.get('/view-volunteer',xhrController.viewVolunteer);

// from author > _company > volunteer > remove : click 
router.get('/remove-volunteer',xhrController.removeVolunteer);
module.exports = router;