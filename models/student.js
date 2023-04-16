const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    email :{
        type : String,
        required : true
    },
    name :{
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
    fName : {
        type : String,
        required : true
    },
    address :{
        type : String,
        required : true 
    },
    phone : [
        {
            type : String,
            required : true 
        }
    ]
},{
    timestamps : true
})

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;