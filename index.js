// CONFIGURING EXPRESS APP 
const express = require('express');
const app = express();
const port = 8000;

// CONGIGURING ROUTES 
app.use('/',require('./routes/index'));

// LISTENING TO THE PORT 
app.listen(port,err=>{
    if(err){
        console.log("Error connecting to the Port ",port);
        return;
    }
    console.log(`Successfully connected to the Server at port ${port}`);
})
