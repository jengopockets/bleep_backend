const router = require('express').Router();
const bcrypt = require('bcryptjs');

const User = require('./authModel');

router.get('/', (req,res) => {
    User.getUserNames()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router