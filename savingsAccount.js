const mongoose = require('mongoose');

const savingsAccount = new mongoose.Schema({
    "accountNumber" : { type: Number, required: true },
    "balance" : { type: Number, required: true },
    "interestRate" : { type: String, required: true },
    "createdAt": { type: String, required: true},
    "updatedAt": { type: String, required: true}
})

module.exports = mongoose.model('savingsAccount', savingsAccount);