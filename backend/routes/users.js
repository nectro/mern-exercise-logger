const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users.length))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res)=>{
    const username = req.body.username;

    const newUser = new User({username});
    User.find({ username : username })
    .then(users => {
        if(users.length === 0){
            newUser.save()
                .then(user => res.json(user))
                .catch(err => res.status(400).json('Error: ' + err))
        }else{
            res.json(users[0]);
        }
    })
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;