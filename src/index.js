const app = require('./app')
const port = process.env.PORT // for heroku deployment

app.listen(port,() =>{
    console.log("Server is up on port "+ port)
})

