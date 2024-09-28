import express from "express"
import User from "../models/User.model.js"
import {body, validationResult} from "express-validator"
import jwt from "jsonwebtoken"


const router = express.Router()

const jwtSeceret = process.env.JWT_SECERET


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

    
export default router