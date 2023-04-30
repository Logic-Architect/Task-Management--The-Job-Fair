// CONFIGURING EXPRESS APP 
const express = require('express');
const app = express();
const port = 8000;

// CONFIGURING LAYOUTS 
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

// CONFIGURING VIEW ENGINE 
app.set('view engine','ejs');
app.set('views','./views');

// MANAGING STYLES AND SCRIPTS FROM VARIOUS VIEWS FOLLOWING LAYOUTS 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// DISABLING GLOBAL LAYOUTS 
app.set('view options', { layout: false });

// CONFIGURING PATH TO STATIC FILES 
app.use(express.static('./assets'));

// CONFIGURING READABILITY THROUGH POST REQUEST 
app.use(express.urlencoded());

// CONNECTING TO THE DATABASE 
const db = require('./config/mongoose');

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
app.use(session({
    name : 'Codeal',
    secret : "aisikitaisi",
    saveUninitialized : false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    },
    store : new MongoStore(
        {
                mongoUrl : 'mongodb://127.0.0.1/codeal_development'
        },
        {
            mongooseConnection : db,
            autoRemove : 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongo setup ok!!')
        }
    )
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


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
