import {Router} from 'express'
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import Review from '../models/reviewModel.js'
const usersRouter = Router()
import verify from '../middleware/verify.js'


const middleWare = (req, res, next) => {
    console.log('It is the middleware')
    next()
}

usersRouter.get('/users', async (req, res) => {
    const users = await User.find()
    res.json(users)
})

usersRouter.get('/users/:userID/reviews', async (req, res) => {
    const {userID} = req.params
    const user = await Review.find({userID : userID})
    return res.json(user)
})

usersRouter.post('/users', async (req, res) => {
    const {email} = req.body
    // const newUser = await User.create({
    //     name : req.body.name,
    //     age : req.body.age,
    //     password : req.body.password,
    //     email : req.body.email
    // })
    // res.json(newUser)

    const salt = await bcrypt.genSalt(5) // SALT : Add complexity to the password 
    const hashedPassword = await bcrypt.hash(req.body.password, salt) // will hash the password and then add the salt 

    // we create a new user following our model User
    const newUser = await new User({
        email : email,
        age : req.body.age,
        name : req.body.name,
        password : hashedPassword,
        image : req.body.image
    })

    // we save the user we created
    newUser.save()
    return res.json(newUser) 

})

usersRouter.put('/users/:userID', async (req, res) => {
    const {userID} = req.params
    const updatedUser = await User.findByIdAndUpdate(userID, req.body)
    const newUser = await User.findById(userID)
    return  res.json(newUser)
})


export default usersRouter