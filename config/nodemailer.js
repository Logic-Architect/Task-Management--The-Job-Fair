const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');

let transport = nodemailer.createTransport({
    service : 'gmail',
    host : 'smtp.gmail.com',
    port : 587,
    secure : false,
    auth : {
        user : 'er.amantiwari.nodeMailer@gmail.com',
        pass : 'gzdblgruttmikgqq'
    }
})

let renderTemplate = (data,relativePath)=>{
    let mailHTML
    ejs.renderFile(
        path.join(__dirname,'../views/mail',relativePath),
        data,
        function(err,info){
            if(err){
                console.log('error rendering gmail templates',err)
                return;
            }
            mailHTML = info;
            console.log('render email template',info)
        }
    )
    return mailHTML;
}

module.exports ={
    transport : transport,
    renderTemplate : renderTemplate
}