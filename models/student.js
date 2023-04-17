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
    college : {
        type : String,
        required :true
    },
    password : {
        type: String,
        required : true
    }
},{
    timestamps : true
})

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;