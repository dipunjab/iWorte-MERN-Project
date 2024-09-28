import express from "express"
import User from "../models/User.model.js"
import {body, validationResult} from "express-validator"
import jwt from "jsonwebtoken"
import verifyUser from "../middleware/auth.middleware.js"
import StickyNote from "../models/StickNote.model.js"
import Note from "../models/Note.model.js"
import Task from "../models/Task.model.js"

const router = express.Router()

const jwtSeceret = process.env.JWT_SECRET


// Registering a User to database
router.post("/createuser",
    [
     body('name',"Enter a valid name").isLength({min: 3}),
     body('email', "Enter a valid email").isEmail(),
     body('password', "Enter a valid password").isLength({min: 5})
    ],async(req,res)=>{

        let success = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({success, errors: errors.array()})
        }

        try {
            const {name, country, email, password} = req.body

            const findUser = await User.findOne({email: email})
            if (findUser) {
                return res.status(400).json({message: "User already exists"})    
            }

            const createUser = await User.create({
                name: name,
                country: country,
                email: email,
                password: password
            });
            if(!createUser) return res.status(400).json({message: "Failed to create User"})    
             
            res.status(200).json({Success: "User Created Successfully", data: createUser})        

        } catch (error) {
            console.log(error);
            res.status(400).json({error: "Server Error"})   
        }
    });

//Route to Login user and generate header auth token
router.post("/login", 
    [
     body('email', "Enter a valid email").isEmail(),
     body('password', "password required").exists(),
    ],
    async(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
    
    const { email, password} = req.body

    const user = await User.findOne({email: email})
    if(!user) return res.status(404).json({message: "Invalid User credential"})

    const isPasswordValid = await user.isPasswordCorrect(password)
    if(!isPasswordValid) return res.status(404).json({message: "Invalid User credential"})
        
    const data = {
        user:{
            id: user.id
        }
    }    

    const authToken = jwt.sign(data, jwtSeceret)

    res.status(200).json({message: "User Logged In successfully", authToken: authToken})
    });    

//Route to delete user account
router.delete('/deleteuser', verifyUser, async (req, res) => {
    try {
        const userId = req.user.id;  

        // Find and delete the user
        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Optionally delete related data (tasks, notes, sticky notes)
        await Task.deleteMany({ owner: userId });
        await StickyNote.deleteMany({ owner: userId });
        await Note.deleteMany({ owner: userId });

        res.json({ message: 'Account and related data deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
   
    
export default router