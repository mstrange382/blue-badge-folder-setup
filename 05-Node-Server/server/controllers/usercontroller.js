require("dotenv").config();
let express = require('express');
let router = express.Router();
let sequelize = require('../db')
let User = sequelize.import('../models/user.js')
let jwt = require("jsonwebtoken");
let bcrypt = require('bcryptjs');

router.post('/create', function(req,res){
        
    let userModel = {
        email: req.body.user.email,     
        password: bcrypt.hashSync(req.body.user.password, 15)
    };
    User.create(userModel).then(
        function(user){
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
            res.status(200).json({
                user: user,
                message: "user successfully created",
                sessionToken: token
            })
            .catch(err => res.status(500).json({ error: err }))
})});

router.post('/login', function(req, res) {
    User.findOne({
        where: {
            email: req.body.user.email
        }
    })
        .then(function loginSuccess(user) {
            if (user) { 
                bcrypt.compare(req.body.user.password, user.password, function (err, matches) {
                    if (matches) {
                        let token = jwt.sign({id: user.id}, 'i_am_secret', {expiresIn: 60 * 60 * 24})
                        res.status(200).json({
                            user: user,
                            message: "User seccessfully logged in!",
                            sessionToken: token
                        })
                    } else {
                        res.status(502).send({ error: "Login Failed"})
                    }
                });
            } else {
                res.status(500).json({ error: 'User does not exist.'})
            }
            }
        )
        .catch(err => res.status(500).json({ error: err}))
})               
                        

module.exports = router;