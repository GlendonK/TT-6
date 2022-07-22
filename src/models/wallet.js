const mongoose = require('mongoose')
// const validator = require('validator')

const wallet_tableSchema = new mongoose.Schema({
    id:{type: Number},
    user_id:{type: Number},
    name:{type: String}
})

const Wallet_table = mongoose.model('Wallet_table', wallet_tableSchema )

module.exports = Wallet_table