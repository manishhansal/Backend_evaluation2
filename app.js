const express = require('express');
const app = express();
const userModel = require('./user');
const savingsAccountModel = require('./savingsAccount');

app.use(express.json());

app.post('/createUser', async (req, res, next) => {
    //fetch info from request body.
    try {

        console.log('req.body', req.body)
        let userDetail = req.body;
        let response = await userModel.insertMany([userDetail]);
        res.json(response);
        
    }
    catch(error) {
        res.json(error)
    }
})

app.post('/createSavingsAccount', async (req, res, next) => {
    //fetch info from request body.
    try {

        console.log('req.body', req.body)
        let savingsAccountDetail = req.body;
        let response = await savingsAccountModel.insertMany([savingsAccountDetail]);
        res.json(response);
        
    }
    catch(error) {
        res.json(error)
    }
})

module.exports = app;