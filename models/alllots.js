const mongoose = require('mongoose');

const allotmentSchema = mongoose.Schema({
    cid :{
        type : mongoose.Schema.Types.ObjectId,
        ref :'Company',
        required : true 
    },
    volEmail :{
        type: String,
    },
    volName : [
        {
            type:String,
        }
    ],
    volPhone:[
        {
            type :String,
        }
    ],
    roomAlloted :{
        type : Boolean,
        required: true,
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