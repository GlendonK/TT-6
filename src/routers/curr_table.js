const express = require('express')
const Curr_table = require('../models/curr_table')
const mongoose = require('mongoose')
const router = new express.Router()
const auth = require('../middleware/auth')


router.get('/currency_table', async(req, res) =>{
    try{
        // checks task id and if it was created by owner
        const curr_ex = await Curr_table.find()
        // console.log(curr_ex)
        if(!curr_ex){
            return res.status(404).send(curr_ex)
        }
        res.send(curr_ex)
    } catch(e){
        res.status(500).send(e)
    }
})
// get all wallets related to user!, Auth middleware is used here to authenticate user and also because it returns the current session user as req.user
router.get('/my_currencies', auth,async(req, res) =>{
    try{
        // checks task id and if it was created by owner
        // console.log(req.user.id)
        const curr_ex = await Curr_table.find({wallet_id: Number(req.user.id)})
        // console.log(curr_ex)
        if(!curr_ex){
            return res.status(404).send(curr_ex)
        }
        res.send(curr_ex)
    } catch(e){
        res.status(500).send(e)
    }
})

module.exports = router