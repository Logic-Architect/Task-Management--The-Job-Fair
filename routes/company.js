const express = require('express');
const router = express.Router();
const passport = require('passport');

const companyController = require('../controllers/companyController');

router.get('/',passport.checkCompanyAuthentication,companyController.home);
router.post('/create',companyController.create);
router.post('/create-session',passport.authenticate(
    'local',
    {
        failureRedirect : '/sign-in'
    }
),companyController.createSession);

router.get('/sign-out',companyController.signOut)

module.exports = router