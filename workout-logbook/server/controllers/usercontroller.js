require("dotenv").config();
let express = require('express');
let router = express.Router();
let sequelize = require('../db');
let jwt = require("jsonwebtoken");
let bcrypt = require('bcryptjs');
let User = sequelize.import('../models/user.js');


router.post('/register', (req, res) => {
    const registerLog = {
        username: req.body.user.username,
        passwordhash: bcrypt.hashSync(req.body.user.passwordhash, 15)
    };
    User.create(registerLog)
    .then(
        function(user){
            let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24});
            res.status(200).json({
                user: user,
                message: "User Successfully Created",
                sessionToken: token
            })
            .catch(err => res.status(500).json({ error: err }))
})});

router.post('/login', function (req, res)  {
    User.findOne({
        where: {
            username: req.body.user.username
        }
    })
        .then(function loginSuccess(user) {
            if (user) { 
                bcrypt.compare(req.body.user.passwordhash, user.passwordhash, function (err, matches) {
                    if (matches) {
                        let token = jwt.sign({id: user.id}, 'i_am_secret', {expiresIn: 60 * 60 * 24})
                        res.status(200).json({
                            user: user,
                            message: "User successfully logged in!",
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


module.exports = router
