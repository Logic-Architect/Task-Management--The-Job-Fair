// ACTION TO HOME 
module.exports.home = function(req,res){
    return res.render('home',{
        layout : 'homeLayout',
        title : 'Job Fair'
    })
}

module.exports.signIn = function(req,res){
    return res.render('sign-in',{
        layout : 'blank',
        title : 'Sign In'
    })
}

module.exports.signUp = function(req,res){
    return res.render('sign-up',{
        layout : 'blank',
        title : 'Sign Up'
    })
}