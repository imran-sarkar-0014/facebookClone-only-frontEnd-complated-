const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

// middelwares

const authenticated = require('../middelwares/authenticated')
router.use(authenticated)

router.get('/', async (req, res) => {
    try {
        const user = await User.findById(req.userId)
        if (!user)
            throw 'user not found'
        const customData = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            gender: user.gender,
            dateOfBirth: user.dateOfBirth
        }

        return res.status(200).json(customData)

    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router