let express = require('express');
let router = express.Router();
let Workout = require('../db').import('../models/log')


router.get('/practice', function(req,res)
{
    res.send("Hey! This is a practice route!")
})



router.post('/user/register', validateSession, (req, res) => {
    const registerLog = {
        title: req.body.Workout.title,
        date: req.body.journal.date,
        entry: req.body.journal.entry,
        owner: req.user.id
    }
    Journal.create(journalEntry)
    .then(journal => res.status(200).json(journal))
    .catch(err => res.status(500).json({error:err}))
});
module.exports = router
