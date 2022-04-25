const mongoose = require('mongoose');

const masterAccount = new mongoose.Schema({
    "balance" : { type: Number, required: true },
    "createdAt": { type: String, required: true},
    "updatedAt": { type: String, required: true}
})

module.exports = mongoose.model('masterAccount', masterAccount);