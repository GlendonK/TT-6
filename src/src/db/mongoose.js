const mongoose = require('mongoose')
const validator = require('validator')

// connection string: directly specifies database name, connection options
mongoose.connect(`${process.env.MONGODB_URL}`,{})

// for mongoose models 
// The first argument is the singular name of the collection your model is for. 


// const User = mongoose.model('User', {
//     name: {type: String, required: true, trim: true},
//     email:{type: String, required: true, trim: true, lowercase:true,
//         validate(value){
//         if(!validator.isEmail(value)){
//             throw new Error('Email is invalid')
//         }
//     } },
//     age: {type: Number, default: 0,
//         validate(value){ // validation function to specify validation
//             if(value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password: {type: String, required: true, 
//     validate(value){
//         if(!validator.isStrongPassword(value,{minLength:7})){
//             throw new Error('Password is not strong enough!')
//         }
        
//     }
//     }
// })

// const me = new User({  name:'Betty',email:'bern@live.com', age: 25, password:'password'})

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log("Error", error)
// })


// const Tasks = mongoose.model('Tasks', {
//     name: {type:String},
//     description: {type:String, required:true, trim:true},
//     completed: {type: Boolean, default: false}
// })

// const clean = new Tasks({ name: 'Cleaning the house',
//     description: 'Cleaning the: bedrooms, living room, kitchen, sink' ,
//     completed: true 
// })

// clean.save().then(()=> {console.log(clean)}).catch((error)=>{
//     console.log(error)
// })