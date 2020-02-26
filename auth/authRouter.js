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

router.post('/login', (req, res) => {
    if(!req.body.password || !req.body.username){
        res.status(401).json({message: 'Needs Username & Password'})
    }else {
        let {username, password } = req.body;
        User.getUser({ username })
            .first()
            .then(user => {
                console.log(user);
                if (user && bcrypt.compareSync(password, user.password)) {
                    res.status(200).json({message: `Welcome ${user.username}!`, token})
                }else{
                    res.status(401).json({ message: 'You Shall Not Pass!'})
                }
            })
            .catch(err => {
                res.status(500).json({message: 'The Backend Messed Up!'});
            });
    }
});


module.exports = router