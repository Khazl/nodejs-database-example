require('dotenv').config()
const { User } = require('./database.js')

User.findAll().then(data => {
    data.forEach(user => {
        console.log(`(${user.id}) ${user.name} - ${user.email}`)
    })
})