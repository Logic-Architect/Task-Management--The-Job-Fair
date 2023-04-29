module.exports.home = function(req,res){
    return res.render('company',{
        layout : 'homeLayout',
        title : 'Company'
    })
}

module.exports.create = function(req,res){
    console.log(req.body)
    return res.redirect('back');
}

module.exports.createSession = function(req,res){
    return res.redirect('back');
}