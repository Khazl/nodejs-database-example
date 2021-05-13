const { Sequelize } = require('sequelize')

const { UserFields, UserOptions } = require('./Models/User.js')

const database = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    })

// https://sequelize.org/master/manual/model-basics.html
exports.User = database.define('user', UserFields, UserOptions);
// exports.Something = database.define('something', SomethingFields, SomethingOptions);
// Add more models here ...

if (process.env.DEBUG) {
    (async () => {
        try {
            await database.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })()
}

exports.database = database