const nodemailer = require("../config/nodemailer");
const root = 'er.amantiwari.2002@gmail.com';



exports.signUpCode = (newAuthor,key) => {
    console.log('inside signUpCOde Mailer', newAuthor);
    
    let htmlString = nodemailer.renderTemplate(
        {
            user: newAuthor, 
            key: key
        },
        '/new-author-secure-key.ejs'
    )

    nodemailer.transport.sendMail({
        from : 'JobFair@srimt.in',
        to : root,
        subject : 'New Author Sign Up',
        html : htmlString
    },(err,info)=>{
        if(err){
            console.log('error sending mail',err);
            return 
        }
        console.log('mail sent successfully',info)
    })
    return key;
}