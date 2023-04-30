// Including the required libraries 
const mongoose = require('mongoose');

// Connecting to the database 
mongoose.connect('mongodb://127.0.0.1/job_fair_db');

// Inherting the connection to check if it is successful 
const db = mongoose.connection;

// Checking for error 
db.on('error',console.log.bind(console,'Error Connecting To The Database'));

// Displaying Success Status 
db.once('open',function(){
    console.log("Successfully connected to the database")
})