let express = require('express');
const user = require('../models/user');
let router = express.Router();
let User = sequelize.import('../models/user.js')


router.get('/practice', function(req,res)
{
    res.send("Hey! This is a practice route!")
})



router.post('/user/register', (req, res) => {
    const registerLog = {
        username: req.body.user.username,
        password: req.body.user.password,
    }
    User.create(registerLog)
    .then(user => res.status(200).json(User))
    .catch(err => res.status(500).json({error:err}))
});

router.post('/user/login', (req, res) => {
    const userLogin = {
        username: req.body.user.username,
        password: req.body.user.password,
    }
    User.create(userLogin)
    .then(user => res.status(200).json(User))
    .catch(err => res.status(500).json({error:err}))
});


module.exports = router
