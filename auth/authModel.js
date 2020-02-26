const db = require('../database/dbconfig');

module.exports = {
    getUserNames
}

function getUserNames() {
    return db('users').select('users.username')
}