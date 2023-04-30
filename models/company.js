const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    email :{
        type : String,
        required : true
    },
    cname :{
        type : String,
        required : true 
    },
    password:{
        type : String,
        required : true
    },
    author : {
        type :mongoose.Schema.Types.ObjectId,
        ref : 'Author'
    },
    verified:{
        type : Boolean,
        required :true
    },
    address :{
        type :String,
        required : true
    },
    phone :{
        type : String,
        required : true 
    }
    ,
    hiringFrom :{
        type : Date
    } ,
    hiringUpto :{
        type : Date
    },
    totalVacancy :{
        type : Number,
        required : true
    },
    totalHired :{
        type :Number
    },
    forBranch : [
       {
        type : String,
        required : true
       }
    ],
    type : {
        type : String,
        default : 'company'
    }
},{
    timestamps : true  
})
 
const Company = mongoose.model('Company',companySchema);

module.exports = Company;