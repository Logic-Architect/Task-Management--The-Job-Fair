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

module.exports.viewVolunteer = async function(req,res){
    console.log(req.query.id);

    try {
        let allot = await Allotment.findOne({cid : req.query.id})
    
        if(allot){
          if(allot.volunteers.length>0){
            await Allotment.findById(allot._id)
            .then(allots=>{
                return res.status(200).json({
                    message : 'Room is Alloted',
                    data  : allots.volunteers
                })
            })
            .catch(err=>{
                console.log('Catch error',err);
            })
          }else{
            // room not alloted 
            return res.status(200).json({
                message : 'Volunteer Not Alloted',
                data : null
            })
          }
        }
    } catch (error) {
        console.log('Catch error',error);
    }
}

module.exports.removeVolunteer =async (req,res)=>{
    console.log(req.query)
    try {
        Allotment.findOne({cid:req.query.id})
        .then(allot=>{
            allot.volunteers.pull({_id : allot.volunteers[req.query.index]._id})
            allot.save();
            return res.status(200).json({
                message : 'SuccessFully Deleted The Volunteer'
            })
        })
    } catch (error) {
        console.log('Catch Error',error);
    }
}

module.exports.addVolunteer = function(req,res){
    console.log()
}