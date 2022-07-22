const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Task = require('./task')
const Wallet_table = require('./wallet')
const Curr_table = require('./curr_table')

const userSchema = new mongoose.Schema({
    id:{type: String,},
    name: {type: String, required: true, trim: true},
    username:{type: String, required: true, trim: true, 
        // validate(value){
        // if(!validator.isEmail(value)){
        //     throw new Error('Email is invalid')
        // }
    } ,
    password: {type: String, required: true, 
    validate(value){
        if(!validator.isStrongPassword(value,{minLength:7})){
            throw new Error('Password is not strong enough!')
        }
        }
    },
    tokens:[{
        token:{ type: String, required:true}
    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})
//.methods is for individual user obj, .statics is for general User class

userSchema.methods.generateAuthToken = async function (){
    const user = this
    const token = jwt.sign({_id:user._id.toString()}, process.env.JWT_SECRET)

    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.methods.toJSON = function (){
    const user = this
    const userObject = user.toObject()
    
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

userSchema.virtual('tasks', {
    ref: 'Tasks',
    localField:'_id',
    foreignField:'owner'
})

userSchema.statics.findByCredentials = async (username,password) => {
    const user = await User.findOne({username})

    if(!user){
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Unable to login') // generic errror here is gd!
    }
    return user
}

// need standard function here as 'this' binding is impt
userSchema.pre('save', async function (next) {
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    
    next()
})

userSchema.pre('remove' ,async function (next) {
    const user = this
    await Task.deleteMany({ owner: user._id})
    await Wallet_table.deleteMany({user_id : user.id})
    await Curr_table.deleteMany({wallet_id: user.id})
    next()
})

const User = mongoose.model('User',userSchema )

module.exports = User