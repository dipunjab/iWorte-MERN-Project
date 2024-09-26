import mongoose from "mongoose";
import { Schema } from "mongoose";

import bcrypt from "bcryptjs"

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true});

// Pre-save hook to hash password before saving user to the database
userSchema.pre("save", async function (next) {
    // If the password has not been modified, skip hashing and proceed
    if (!this.isModified("password")) return next()
    
    // Hash the password with a salt round of 10 before saving it 
    this.password = await bcrypt.hash(this.password, 10)
    
    // Call the next middleware or proceed to save the user
    next()    
})

// Method to compare entered password with hashed password
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}


const User = mongoose.model("User", userSchema)
export default User
