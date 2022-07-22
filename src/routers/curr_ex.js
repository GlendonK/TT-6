const express = require('express')
const Curr_ex = require('../models/curr_ex')
const mongoose = require('mongoose')
const router = new express.Router()
const auth = require('../middleware/auth')

router.get('/currency_ex_rates', async(req, res) =>{
    try{
        // checks task id and if it was created by owner
        const curr_ex = await Curr_ex.find()
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

