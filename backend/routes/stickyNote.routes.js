import express from "express"
import StickyNote from "../models/StickNote.model.js"
import { body, validationResult } from "express-validator"
import verifyUser from "../middleware/auth.middleware.js";


const router = express.Router()

//Router to add stickyNote
router.post("/addstickynote", verifyUser, async(req,res)=>{
        try {
            
            const {content, color} = req.body

            const stickyNote = await StickyNote.create({
                content,
                color,
                owner: req.user.id
            })
            if(!stickyNote) return res.status(400).json({message: "Failed to create stickyNote"})

            res.status(200).json({success: "stickyNote created successfully", data: stickyNote})

        } catch (error) {
            return res.status(500).json({error: "Internel Server Error", message: error.message})
        }
    }
);

//Router to delete stickyNote
router.delete("/deletestickyNote/:id", verifyUser ,async(req,res)=>{
    try {
        const {id} = req.params
    
        const stickyNote = await StickyNote.findById(id)
        if(!stickyNote) return res.status(400).json({message: "failed to find sticky Note"})
    
        const deletestickyNote = await StickyNote.findByIdAndDelete(id)
        if(!deletestickyNote) return res.status(400).json({message: "failed to Delete sticky Note"})    
    
        res.status(200).json({success: "stickyNote  deleted Successfully", data: deletestickyNote})    
    } catch (error) {
        return res.status(500).json({error: "Internel Server Error", message: error.message})
    }
});

router.get("/getallstcikynote", verifyUser, async(req,res)=>{
    const stickyNote = await StickyNote.find({owner: req.user.id})
    if(!stickyNote) return res.status(400).json({message: "Fail to fetch sticky Note"})

    res.status(200).json({success: "sticky Note fetched successfully", data: stickyNote})
})

export default router