const mongoose = require('mongoose')
// const validator = require('validator')

const curr_tableSchema = new mongoose.Schema({
    id:{type: Number},
    wallet_id:{type: Number},
    currency:{type: String},
    amount:{type:Number}
})

const Curr_table = mongoose.model('Curr_table', curr_tableSchema )

module.exports = Curr_table