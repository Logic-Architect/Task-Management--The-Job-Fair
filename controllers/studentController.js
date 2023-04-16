module.exports.home = function(req,res){
    return res.render('student',{
        layout : 'homeLayout',
        title : 'Student'
    })
}