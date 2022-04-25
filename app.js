const express = require('express');
const app = express();
const userModel = require('./user');
const savingsAccountModel = require('./savingsAccount');
const fixedAccountModel = require('./fixedAccount');

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


app.get('/users', async (req, res) => {
    try {
        
        let response = await userModel.find({});
        res.json(response);

    } catch (error) {
        res.status(500).json(error);
    }
})

app.post('/createFixedAccount', async (req, res, next) => {
    //fetch info from request body.
    try {

        console.log('req.body', req.body)
        let fixedAccountDetail = req.body;
        let response = await fixedAccountModel.insertMany([fixedAccountDetail]);
        res.json(response);
        
    }
    catch(error) {
        res.json(error)
    }
})

module.exports = app;