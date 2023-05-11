const secureKeyMailer = require('../mailers/request-secure-key');
const Author = require('../models/author');
const crypto = require('crypto');
const Company = require('../models/company');
const RoomInfo = require('../models/rooms');
const Allotment = require('../models/alllots');

module.exports.home = async function (req, res) {

    // Once Run for making the CollegeRooms Database 
    
//     const blockMapper = {
//         0: 'A',
//         1: 'B',
//         2: 'C',
//         3: 'D',
//         4: 'E'
//     }
//     const floors = ['0', '1', '2', '3'];
//     const roomNo = ['01', '02', '03', '04', '05', '06'];

//   for(let i in blockMapper){
//     for(let j of floors){
//         for(let k of roomNo){
//             console.log(blockMapper[i],j,k)
//             await RoomInfo.create({
//                 block : blockMapper[i],
//                 floor : j,
//                 roomNo : k,
//                 status : false
//             })
//         }
//     }
//   }


    // await CollegeRooms.create({
    //     collegeName: '486'
    // })

    // CollegeRooms.findOne({collegeName :'486'})
    //     .then(college => {
    //         for (i = 0; i < Object.keys(blockMapper).length; i++) {
    //             let block = {
    //                 blockName: blockMapper[i],
    //                 floor: []
    //             }
    //             college.block.push(block);
    //             // college.save();
    //             for (j = 0; j < floors.length; j++) {
    //                 let floor = {
    //                     floorName: floors[j],
    //                     room: []
    //                 }
    //                 college.block[i].floor.push(floor);
    //                 // college.save();
    //                 for (k = 0; k < roomNo.length; k++) {
    //                     let room = {
    //                         roomNo: roomNo[k],
    //                         // status : false
    //                     }
    //                     college.block[i].floor[j].room.push(room);
    //                 }
    //             }
    //         }
    //         college.save()
    //     })


    let company = await Company.find();
    // console.log('Company has',company)
    // let allots = await Allotment.findOne({cid : company._id})
    res.render('author', {
        title: 'Author',
        layout: 'authorLayout',
        company: company,
        // volunteers : allots.volunteers,
        // room : {
        //     block : allots.block,
        //     floor : allots.floor,
        //     room : allots.roomNo
        // }
    })
}

// Render Sign IN page 
module.exports.signIn = function (req, res) {
    res.render('author-sign-in', {
        title: 'Sign In',
        layout: 'author-blank'
    })
}

// Render New Author Page 
module.exports.signUp = function (req, res) {
    res.render('author-sign-up', {
        title: 'Register New Author',
        layout: 'author-blank'
    })
}

// Send Security Key for new author to root author and register author
module.exports.verify = async function (req, res) {
    // console.log('Verify User', req.body)

    let key = crypto.randomBytes(20).toString('hex');

    secureKeyMailer.signUpCode(req.body,key);

    // Create the Author in the database 
    if (req.body.password == req.body.confirm_password) {
        let author = await Author.findOne({ email: req.body.email });
        if (!author) {
            Author.create({
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
                designation: req.body.designation,
                phone: req.body.phone,
                secureKey: key,
                // verified : false
            }).then(author => {
                console.log('**********', author)
            })
        } else {
            // AUTHOR ALREADY EXITSS 
            return res.redirect('back');
        }

    } else {
        // PASSWORD DO NOT MATCH 
        return res.redirect('back');
    }

    return res.redirect('/author/secure-key')
}

// RENDER THE PAGE FOR ENTERING THE SECURITY KEY 
module.exports.secureKey = function (req, res) {
    res.render('secure-key', {
        title: 'Security Key',
        layout: 'author-blank'
    })
}

// VERIFY THE SECURITY KEY AND UPDATE THE AUTHOR VERIFICATION STATUS 
module.exports.verifySecureKey = async function (req, res) {
    console.log('secure key bu user', req.body);

    let userKey = await Author.findOne({ email: req.body.email });
    console.log('Key shoukd be', userKey.secureKey);
    if (userKey.secureKey == req.body.key) {
        let updatedUser = await Author.findByIdAndUpdate(userKey._id, { verified: true })
        console.log('Author verified', updatedUser.secureKey);
        return res.redirect('/author/sign-in');
    } else {
        // key dont match 
        return res.redirect('back');
    }

}


// CREATE SIGN IN SESSION 
module.exports.createSession = function (req, res) {
    return res.redirect('/author');
}

// LOG OUT AUTHOR 
module.exports.signOut = function (req, res) {
    req.logout(err => {
        if (err) {
            console.log('Error in Loggin OUt User', err);
            return res.redirect('back');
        }
        return res.redirect('/author/sign-in');
    })
}