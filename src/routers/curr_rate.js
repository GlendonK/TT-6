const express = require('express')
const Curr_rate = require('../models/Curr_rate')
const mongoose = require('mongoose')
const router = new express.Router()
const auth = require('../middleware/auth')

router.get('/currency_rates', async (req,res) =>{
    try{

        const curr_rates = await Curr_rate.find({})
        res.send()
    } catch(e){

    }

})