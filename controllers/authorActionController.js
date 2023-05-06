const Company =require('../models/company');

module.exports.removeCompany = function(req,res){
    console.log('Query',req.query)
    Company.findByIdAndDelete(req.query.id)
    .then(deleted=>{
        console.log('Company Registraion Deleted',deleted);
        return res.redirect('back')
    })
    .catch(err=>{
        console.log('Error deleting the COmpany from Database',err);
    })

}