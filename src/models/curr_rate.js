const mongoose = require('mongoose')
// const validator = require('validator')

const curr_rateSchema = new mongoose.Schema({
    base_curr: {type:String},
    exchange_curr: {type:String},
    rate: {type:Number}
}, {timestamps:true})

const Curr_rate = mongoose.model('Curr_rate', curr_rateSchema )

module.exports = Curr_rate