const monk = require('monk');
const config = require('./config');

const db = monk(config.getValue('mongo', 'mongodb://localhost:27017/test'));

db.then(() => {
    console.log('Successfully connected MongoDB server');
}, (err) => {
    console.error(err.toString());
});

module.exports = db;