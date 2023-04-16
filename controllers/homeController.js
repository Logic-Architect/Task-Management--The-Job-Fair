// ACTION TO HOME 
module.exports.home = function(req,res){
    return res.render('home',{
        layout : 'homeLayout',
        title : 'Job Fair'
    })
}