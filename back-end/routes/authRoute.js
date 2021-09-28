// import modules for router and models
const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/register', (req, res) => {
    res.json('register')
})

// create an account 
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password, salt)
        const user = await new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            dateOfBirth: {
                year: req.body.dateOfBirth.year,
                month: req.body.dateOfBirth.month,
                date: req.body.dateOfBirth.date
            }
        })


        const result = await user.save()

        const token = await jwt.sign({
            userId: result._id
        }, process.env.TOKEN_KEY)

        return res.status(201).json(token)

    } catch (err) {
        return res.status(500).json('internal server error.')
    }

})




// user login
router.post('/login', async (req, res) => {

    try {
        const user = await User.findOne({
            email: req.body.email
        })
        if (user) {
            try {
                const result = await bcrypt.compare(req.body.password, user.password)

                if (result) {
                    const token = await jwt.sign({
                        userId: user._id
                    }, process.env.TOKEN_KEY)

                    return res.status(200).json(token)
                }

            } catch (err) { }
        }
        return res.status(401).json('wrong possword')
    } catch (err) {
        return res.status(500).json('wrong email')
    }
})

module.exports = router