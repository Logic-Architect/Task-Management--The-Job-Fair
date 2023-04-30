const express = require('express');
const router = express.Router();
const passport = require('passport')

const studentController = require('../controllers/studentController');

router.get('/',passport.checkStudentAuthentication,studentController.home);
router.post('/create',studentController.create);
router.post('/create-session',passport.authenticate(
    'local',
    {
        failureRedirect : '/sign-in',
    }
),studentController.createSession);
router.get('/sign-out',studentController.signOut)

module.exports = router;