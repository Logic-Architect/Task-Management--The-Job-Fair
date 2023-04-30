const Student = require('../models/student');
const Company = require('../models/company');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const opts = {
    usernameField: 'email',
    passReqToCallback: true

}
passport.use(new LocalStrategy(opts, function (req, email, password, done) {
    if (req.body.signInType == 'student') {
        console.log('This is student')
        Student.findOne({ email: email })
            .then(student => {
                if (!student || student.password != password) {
                    // Invalid UserName/Password
                    return done(null, false)
                }
                let stud = {
                    id : student._id,
                    type : 'student'
                }
                // console.log('type',stud)
                return done(null, stud);
            })
            .catch(err => {
                console.log('error finding student using passport local strategy', err)
                return done(null,false)
            })
    } else {
        console.log('This is company')
        // Company passport startegy 
        Company.findOne({email:email})
        .then(company=> {
            if(!company || company.password!=password){
                // invalid companyname/password 
                return done(null,false)
            }
            let comp = {
                id : company._id,
                type : 'company'
    
            }
            // console.log('comp',comp)
            return done(null , comp);
        })
        .catch(err=>{
            console.log('error finding company in pasport',err);
            return done(null, false)
        })
    }
})
)
passport.serializeUser(function(obj,done) {
    
    // console.log('serialize user',obj)
    done(null,obj)
})
passport.deserializeUser(async function(obj,done){
    // console.log('deserialize user',obj)
    let info;
    if(obj.type=='student'){
        info = await Student.findById(obj.id)
    }else{
        info = await Company.findById(obj.id)
    }
    
    done(null,info)
    
})

passport.checkStudentAuthentication = function(req,res,next){
    console.log(req.user)
    if(req.isAuthenticated()){
        if(req.user.type=='student'){
            return next();
        }else{
            return res.redirect('/company')
        }
    }else{
        return res.redirect('/sign-in')
    }
    
}
passport.checkCompanyAuthentication = function(req,res,next){
    console.log(req.user)
    if(req.isAuthenticated()){
        if(req.user.type=='company'){
            return next();
        }else{
            return res.redirect('/student')
        }
    }else{
        return res.redirect('/sign-in')
    }
}
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        // res.locals.user = req.user;
        res.locals.user = {
            id : req.user._id,
            email  : req.user.email,
            type :req.user.type
        }
    }
    next();
}

module.exports = passport;