const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const curr_exRouter = require('./routers/curr_ex')
const curr_tableRouter = require('./routers/curr_table')
const wallet_tableRouter = require('./routers/wallet')

const app = express()
const port = process.env.PORT // for heroku deployment


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.use(curr_exRouter)
app.use(curr_tableRouter)
app.use(wallet_tableRouter)

module.exports = app