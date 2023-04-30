const Company = require('../models/company');

module.exports.home = function(req,res){
    return res.render('company',{
        layout : 'homeLayout',
        title : 'Company'
    })
}

// SIGN UP THE COMPANY 
module.exports.create =async function(req,res){
    console.log(req.body)

    if((req.body.password == req.body.confirm_password) && (req.body.verified == 'false') ){

        let company = await Company.findOne({email : req.body.email})

        if(!company){
            Company.create(req.body)
            .then(company=>{
                console.log(company);
                return res.redirect('/company');
            })
            .catch(err=>{
                console.log('Error creating Company',err);
                return res.redirect('back');
            })
        }else{
            console.log('already registered');
            return res.redirect('back');
        }
    }else{
        console.log('passwords do not match')
        return res.redirect('back')
    }
}

module.exports.createSession = function(req,res){
    // console.log('Company Session',req.body)
    return res.redirect('/company');
}

module.exports.signOut = function(req,res){
    console.log('User Logged Out');
    req.logout(function(err){
        if(err){console.log(err);return;}
        return res.redirect('/')
    })
}