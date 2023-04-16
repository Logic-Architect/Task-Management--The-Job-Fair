module.exports.home = function(req,res){
    return res.render('team-info',{
        layout : 'homeLayout',
        title : 'Team Info'
    })
}