let express = require('express');
const user = require('../models/user');
let router = express.Router();
let Log = sequelize.import('../models/user.js')


router.post('/log/', (req, res) => {
    const workLog = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner_id: req.user.id,
    }
    Log.create(workLog)
    .then(user => res.status(200).json(log))
    .catch(err => res.status(500).json({error:err}))
});

router.get('/log/', (req, res) => {
    Log.findMine()
    .then(logs => res.status(200).json(Log))
    .catch(err => res.status(500).json({error:err}))
});

router.get('/log/:id', (req, res) => {
    let id = req.params.id
    User.create(workLog)
    .then(user => res.status(200).json(User))
    .catch(err => res.status(500).json({error:err}))
});

router.put('/log/:id', (req, res) => {
    const updateLog = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
    };
    const query = { where: { id: req.params.entryId, owner_id: req.user.id}};

    Log.update(updateLog, query)
    .then(Log => res.status(200).json(Log))
    .catch(err => res.status(500).json({error:err}))
});

router.delete('/log/:id', (req, res) => {
    const query = { where: { id: req.params.entryId, owner_id: req.user.id}};
    
    Log.destroy(registerLog)
    .then(log => res.status(200).json({ message: "Log Removed"}))
    .catch(err => res.status(500).json({error:err}))
});




module.exports = router