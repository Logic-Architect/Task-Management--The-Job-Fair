const Student = require('../models/student');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const opts = {
    usernameField: 'email',
    passReqToCallback: true

}
passport.use(new LocalStrategy(opts, function (req, email, password, done) {
    if (req.body.signInType == 'student') {
        Student.findOne({ email: email })
            .then(student => {
                if (!student || student.password != password) {
                    // Invalid UserName/Password
                    return done(null, false)
                }
                return done(null, student);
            })
            .catch(err => {
                console.log('error finding student using passport local strategy', err)
            })
    } else {
        // Company passport startegy 
    }
})
)
passport.serializeUser(function(obj,done) {
    done(null,obj.id)
})
passport.deserializeUser(function(id,done){
    Student.findById(id)
    .then(student=>{
        done(null,{
            _id : student.id,
            email : student.email,
            type : 'student'
        })
    })
    .catch(err=>{
        console.log('deserialize error',err);
    })
})

passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/sign-in')
}
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        console.log(req.user)
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;