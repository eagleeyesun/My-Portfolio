import asyncHandler from 'express-async-handler'
import User from '../models/userModels.js'
//@des Auth user/set token
// route POST/api/users/auth
// access Public
const authUser = asyncHandler(async (req,res) => {
    res.status(200).json({ msg: "Auth User"})
})

//@des Register new user
// route POST/api/users
// access Public
const registerUser = asyncHandler(async (req,res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
    
    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        })
    } else{
        res.status(400)
        throw new Error('Invalid user Data')
    }
    res.status(200).json({ msg: "Register User"})
})

//@des logout user
// route POST/api/users/logout
// access Public
const logoutUser = asyncHandler(async (req,res) => {
    res.status(200).json({ msg: "Logout User"})
})

//@des Get user profile
// route POST/api/users/profile
// private
const getUserProfile = asyncHandler(async (req,res) => {
    res.status(200).json({ msg: "User Profile"})
})

//@des Update user profile
// route POST/api/users/profile
// access Private
const updateUserProfile = asyncHandler(async (req,res) => {
    res.status(200).json({ msg: "Update User Profile"})
})

export {
     authUser,
     registerUser,
     logoutUser,
     getUserProfile,
     updateUserProfile
 }