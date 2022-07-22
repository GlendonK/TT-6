const express = require('express')
const Wallet_table = require('../models/wallet')
const mongoose = require('mongoose')
const router = new express.Router()
const auth = require('../middleware/auth')

// get all wallets related to user!, Auth middleware is used here to authenticate user and also because it returns the current session user as req.user
router.get('/my_wallets', auth,async(req, res) =>{
    try{
        // checks task id and if it was created by owner
        // console.log(req.user.id)
        const curr_ex = await Wallet_table.find({user_id: Number(req.user.id)})
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