const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/authRouter');

const server = express()
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.send('Its alive :smile:')
})


module.exports = server;