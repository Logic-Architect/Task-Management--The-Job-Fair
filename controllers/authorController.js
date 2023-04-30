module.exports.home = function(req,res){
    res.render('author',{
        title : 'Author',
        layout : 'authorLayout'
    })
}