module.exports.home = function(req,res){
    return res.render('company',{
        layout : 'homeLayout',
        title : 'Company'
    })
}