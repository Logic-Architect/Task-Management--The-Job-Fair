const mongoose = require('mongoose');

const verificationSchema = mongoose.Schema({
    cid :{
        type : mongoose.Schema.Types.ObjectId,
        ref :'Company',
        required : true 
    },
    author:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'Author',
    },
    verified:{
        type : Boolean,
        required :true
    },
    roomno:{
        type : String
    }
},{
    timestamps : true   
})

const Verification = mongoose.model('Verification',verificationSchema);

module.exports = Verification;