const Company = require('../models/company');
const Allots = require('../models/alllots');
const Author = require('../models/author');
const RoomInfo = require('../models/rooms');

module.exports.removeCompany = function (req, res) {
    // console.log('Query',req.query)
    Company.findByIdAndDelete(req.query.id)
        .then(deleted => {
            console.log('Company Registraion Deleted', deleted);
            return res.redirect('back')
        })
        .catch(err => {
            console.log('Error deleting the COmpany from Database', err);
        })

}

module.exports.allot = async function (req, res) {
    console.log('qw', req.query);
    console.log('qa', req.body);
    console.log('author', req.user);
    console.log('type',typeof(req.body.volName))

    // Check Room AVAILABILITY 

    let room_allot =await Allots.findOne({
        block : req.body.block,
        floor : req.body.floor,
        roomNo : req.body.roomNo,
    });

    if(room_allot){
        await RoomInfo.findOneAndUpdate({
            block : req.body.block,
            floor : req.body.floor,
            roomNo : req.body.roomNo,
        },{
            status : true
        })
        return res.send('Room Alloted')
    }
    

    // alloting room number 

    let allot =await Allots.findOne({cid : req.query.id});
    console.log(allot);
    if(!allot){
        Allots.create({
            cid: req.query.id,
            roomAlloted :true,
            block : req.body.block,
            floor : req.body.floor,
            roomNo : req.body.roomNo,
        })
            .then(allot => {
                console.log(allot);
                if(typeof(req.body.volName)=='string'){
                    let volObj = {
                        name : req.body.volName,
                        email : req.body.volEmail,
                        phone : req.body.volPhone
                    }
                    allot.volunteers.push(volObj);
                    allot.save();
                }else{
                    for(let i=0;i<req.body.volName.length;i++){
                        let volObj = {
                            name : req.body.volName[i],
                            email : req.body.volEmail[i],
                            phone : req.body.volPhone[i]
                        }
                        allot.volunteers.push(volObj);
                    }
                    allot.save()
                }
            })
            .catch(err=>{
                console.log('(\'_\')',err);
            })
    }else{
        Allots.findByIdAndUpdate(allot._id,{
            roomAlloted :true,
            block : req.body.block,
            floor : req.body.floor,
            roomNo : req.body.roomNo,
        })
        .then(allot => {
            console.log(allot);
            if(typeof(req.body.volName)=='string'){
                let volObj = {
                    name : req.body.volName,
                    email : req.body.volEmail,
                    phone : req.body.volPhone
                }
                allot.volunteers.push(volObj);
                allot.save();
            }else{
                for(let i=0;i<req.body.volName.length;i++){
                    let volObj = {
                        name : req.body.volName[i],
                        email : req.body.volEmail[i],
                        phone : req.body.volPhone[i]
                    }
                    allot.volunteers.push(volObj);
                }
                allot.save()
            }
        })
    }


    // Update rooms database 
    await RoomInfo.findOneAndUpdate({
        block : req.body.block,
        floor : req.body.floor,
        roomNo : req.body.roomNo,
    },{
        status : true
    })
    // Set in the company database which author has authorised it 

    await Company.findByIdAndUpdate(req.query.id,{
        author : req.user._id,
        verified : true
    })
    // Update authors authorized field 
    await Author.findById(req.user._id)
    .then(author=>{
        console.log(author);
        for(let i of author.authorised){
            if (i==req.query.id){
                console.log('already authorized');
                break;
            }
        }
            author.authorised.push(req.query.id);
            author.save();
            console.log('authorized')
    })

    return res.redirect('back')
}

module.exports.roomInfo =async (req,res)=>{
    let room = await RoomInfo.find()
    console.log(typeof(room))
    return res.render('room_info',{
        layout : 'authorLayout',
        title : 'Room Info',
        room : room
    })
}