import express from "express"
import Note from "../models/Note.model.js"
import { body, validationResult } from "express-validator"
import verifyUser from "../middleware/auth.middleware.js";


const router = express.Router()

//Create Note Router
router.post("/addnote", verifyUser,
    [
        body('title', "Enter min 3 characters title").isLength({ min: 3 }),
        body('content', "Enter a min 5 characters content.").isLength({ min: 5 })
    ]
    , async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { title, content, tag} = req.body

        const note = await Note.create({
            title: title,
            content: content,
            tag: tag,
            owner: req.user.id
        })
        if(!note) return req.status(400).json({message: "Failed to create Note"})

        res.status(200).json({success: "Note Created Successfully", data: note})    
    });

// Router to update/Edit note
router.put("/updatenote/:id", verifyUser, 
    [
        // Validate title: should be at least 3 characters long (optional)
        body('title', "Enter min 3 characters title").optional().isLength({ min: 3 }),
        
        // Validate content: should be at least 5 characters long (optional)
        body('content', "Enter a min 5 characters content.").optional().isLength({ min: 5 })
    ],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); 
        }

        // Extract the note ID from the request parameters
        const { id } = req.params;
        
        // Extract title, content, and tag from the request body
        const { title, content, tag } = req.body;

        // Find the note by its ID
        const note = await Note.findById(id);
        if (!note) return res.status(404).json({ message: "Note not found" }); 

        // Check if the current user is the owner of the note
        if (note.owner.toString() !== req.user.id) {
            return res.status(401).json("You are not Allowed"); 
        }    

        // Update the note with the new values
        const updateNote = await Note.findByIdAndUpdate(id, {
            $set: {
                title, 
                content, 
                tag 
            }
        }, { new: true });

        // Check if the update failed
        if (!updateNote) return res.status(400).json({ message: "Failed to update note" });

        // Respond with a success message and the updated note
        res.status(200).json({ message: "Note updated successfully", data: updateNote });    
    }
);
    

export default router