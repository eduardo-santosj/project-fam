const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Client = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        finalizeRegistration: { type: Boolean },
    }, { collection: 'users' }
)

module.exports = mongoose.model('numeric', Client)
