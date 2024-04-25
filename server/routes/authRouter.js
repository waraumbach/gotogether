
import { Router } from 'express'
import User from '../models/userModel.js'
const authRouter = Router()
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



authRouter.post('/register', async (req, res) => {
    try {
        // check if the email already exists
        const emailExist = await User.findOne({ email: req.body.email })
        if (emailExist) return res.status(400).send('Email already exists')

        // encrypt the password
        const salt = await bcrypt.genSalt(10)  // default is 10 rounds
        const hashedPassword = await bcrypt.hash(req.body.password, salt) // we will hash the password (req.body.password) and add the salt to it

        // we will create a new user with the info provided by the user (body)
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            gender:req.body.gender,
            password: hashedPassword,
            //if the user is not providing an image(the image being the req.file)we will assign a default image, the path to this image is : '/bangkok.jpg'
            //image: req.file ? '/public/images' + req.file.fieldname: '/bangkok.jpg'
            image :req.file ? '/public/images/' + req.file.filename
                   :req.body.gender==='male' ? '/images/profile-male.png'
                   :req.body.gender==='woman'?'/images/profile-woman.png'
                   :'/images/profile.png'
        })

        newUser.save()
        return res.json(`Welcome ${newUser.name}`)
    }
    catch (err) {
        return res.json(err)
    }
})

authRouter.post('/login', async (req, res) => {

    try {
        // Check if the email provided by the user matches with one in the database
        const user = await User.findOne({ email: req.body.email })
        if (!user) return res.status(400).send('Email or password wrong')

        // Compare the password given by the user (req.body.password) with the one in the database, the one that has been encrypted : user.password
        const validPass = await bcrypt.compare(req.body.password, user.password)
        if (!validPass) return res.status(400).send('Email or password wrong')

        // Create the JWT token
        const token = jwt.sign({name : user.name, email : user.email, age : user.age}, process.env.JWT_SECRET)
        res.header('auth-token', token)
        return res.json(token)


    }

    catch (err) {
        return res.json(err)
    }

})


export default authRouter