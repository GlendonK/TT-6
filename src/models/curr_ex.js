const mongoose = require('mongoose')
// const validator = require('validator')

const curr_exSchema = new mongoose.Schema({
    id:{type: String},
    base_currency:{type: String},
    ex_currency:{type: String},
    rate:{type:Number}
})

const Curr_ex = mongoose.model('Curr_ex', curr_exSchema )

module.exports = Curr_ex