const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    email :{
        type : String,
        required : true
    },
    username :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true 
    },
    designation : {
        type : String,
        required : true 
    },
    phone : {
        type :String,
        required : true
    },
    secureKey : {
        type :String,
        required : true
    },
    verified : {
        type : Boolean,
        required : true,
        default : false
    },
    authorised:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Company'
        }
    ]
},{
    timestamps : true 
})

const Author = mongoose.model('Author',authorSchema);

module.exports = Author;

