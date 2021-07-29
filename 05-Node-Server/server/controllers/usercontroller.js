let express = require('express');
let router = express.Router();
let sequelize = require('../db')
let user = sequelize.import('../models/user.js')

// router.post('/create', function(req,res){

//     let userModel = {
//         email: req.body.user.email,
//         password: req.body.user.password,
//     };
//     user.create(userModel).then(function(user){
//         let responseObject = {
//             user: user
//         };
//         res.json(responseObject);
//     })
//     // .catch(function(err){
//     //     res.json({error: err})
//     // });
// });

router.post("/login", function(req,res){
    user.findOne({where:{email: 'test4@test.com'}})
    .then(function loginSuccess(user){
        if(user){
            res.status(200).json({user: user});
        } else{
            res.send("User not found");
        }
        res.json({user: user});
    }).catch(function (err){
        res.status(500).json({error:err});
    });
});
module.exports = router;