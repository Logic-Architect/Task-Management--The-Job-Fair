const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    block : {
        type : String,
        required : true
    },
    floor : {
        required : true,
        type : String
    },
    roomNo :{
        type : String,
        required: true
    },
    status : {
        type : Boolean,
        required  : true,
        default : false
    }
},{
    timestamps : true
})

const RoomInfo = mongoose.model('RoomInfo',roomSchema);

module.exports = RoomInfo;

