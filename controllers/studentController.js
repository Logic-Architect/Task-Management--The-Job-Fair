const Student = require('../models/student');
const Company = require('../models/company');
const Allots = require('../models/alllots');

module.exports.home = async function(req,res){

    let company = await Company.find({verified : true}).sort('ascending')

    let companyInfo = [];
    for(let i of company){
        let allots = await Allots.findOne({cid : i._id});

        companyInfo.push({
            info : i,
            allotment : allots
        })
    }

    console.log(companyInfo);

    return res.render('student',{
        layout : 'homeLayout',
        title : 'Student',
        company : companyInfo
    })
}

// SIGN UP THE USER 
module.exports.create = async function(req,res){
    console.log(req.body);

    if(req.body.password == req.body.confirm_password){

        let student = await Student.findOne({email : req.body.email});
        if(!student){
            Student.create(req.body);
            return res.redirect('/sign-in')
        }else{
            // student already exist
            return res.send('Student already Exist')
        }

    }else{
        // password do not match
        return res.send('Passwords do not match')
    }
}

module.exports.createSession = function(req,res){
    // console.log(req.body)
    return res.redirect('/student');
}

module.exports.signOut = function(req,res){
    console.log('Logged Out Student');
    req.logout((err)=>{
        if(err){return}
        return res.redirect('back');
    })
}