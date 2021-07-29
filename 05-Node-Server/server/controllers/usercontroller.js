let express = require('express');
let router = express.Router();
let sequelize = require('../db')
let user = sequelize.import('../models/user.js')
let jwt = require("jsonwebtoken");

router.post('/create', function(req,res){

    User.create({
        email: req.body.user.email,
        password: req.body.user.password,
    })
    .then(function createSuccess(user){
        let token = jwt.sign({id: user.id}, "i_am_secret", {expiresIn: 60*60*24});
        res.json( {
            user: user,
            message: "user successfully created",
            sessionToken: token
        });
        
    })
    .catch(function(err){
        res.json({error: err})
    });
});

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