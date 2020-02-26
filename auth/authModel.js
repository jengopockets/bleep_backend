const db = require('../database/dbconfig');

module.exports = {
    getUserNames,
    getUser
}

function getUserNames() {
    return db('users').select('users.username')
}
function getUser(filter) {
    return db('users').where(filter);
}