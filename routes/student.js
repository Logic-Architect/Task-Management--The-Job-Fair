const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.get('/',studentController.home);
router.post('/create',studentController.create);
router.get('/create-session',studentController.createSession);

module.exports = router;