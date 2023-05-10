const Allotment = require('../models/alllots');
const Company = require('../models/company')

module.exports.viewCompany = async (req,res)=>{
    if(req.xhr){
        let block = req.query.block;
        let floor = req.query.floor;
        let roomNo = req.query.room;
        console.log(block,floor,roomNo);

        let alloted = await Allotment.findOne({
            block : block,
            floor : floor,
            roomNo : roomNo
        })

        if(!alloted){
            return res.status(200).json({
                message : 'Room Is Empty',
                data : null
            })
        }
        else{

            let company = await Company.findById(alloted.cid)
            return res.status(200).json({
                message : 'Room Occupied',
                data : {
                    cName : company.cname,
                    cEmail : company.email,
                    cPhone : company.phone
                }
            })
        }
    }
}