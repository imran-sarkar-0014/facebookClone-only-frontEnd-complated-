// import server modules
require('dotenv').config()
const { prototype } = require('events')
const express = require('express')
const app = express()
const Server = require('http').Server(app)

// import use basic middleware
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('tiny'))
app.use(helmet())

// connect to database
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/facebook', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


// home route
app.get('/', (req, res) => {
    res.send('hello from express')
})

// import routes and use
const authRouter = require('./routes/authRoute')
const userRouter = require('./routes/userRoute')
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)



// Start the server
const PORT = process.env.PORT || 3000
Server.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`)
})