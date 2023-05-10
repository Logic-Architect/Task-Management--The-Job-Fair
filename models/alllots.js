const mongoose = require('mongoose');

const allotmentSchema = mongoose.Schema({
    cid :{
        type : mongoose.Schema.Types.ObjectId,
        ref :'Company',
        required : true,
        unique : true
    },
   volunteers : [
    {
        name : {
            type : String,
        },
        email : {
            type :String
        },
        phone :{
            type :String
        }
    }
   ],
    roomAlloted :{
        type : Boolean, 
        default : false
    },
    block:{
        type:String,
    },
    floor:{
        type : String,
    },
    roomNo :{
        type : String,
    }
},{
    timestamps : true   
})

const Allotment = mongoose.model('Allotment',allotmentSchema);

module.exports = Allotment;