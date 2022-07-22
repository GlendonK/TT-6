const app = require('./app')
const port = process.env.PORT // for heroku deployment

app.listen(port,() =>{
    console.log("Server is up on port "+ port)
})

// mongodb atlas user/pw
// aaronfoofy
// Ztzm6OIKmM5dFKdE
//mongodb+srv://aaronfoofy:Ztzm6OIKmM5dFKdE@cluster0.tdo0l.mongodb.net/test