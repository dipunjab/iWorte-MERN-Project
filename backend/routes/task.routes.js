import express from "express"
import Task from "../models/Task.model.js"
import { body, validationResult } from "express-validator"
import verifyUser from "../middleware/auth.middleware.js";


const router = express.Router()

//Router to add tasks
router.post("/addtask", verifyUser, 
    [
        body('title', "Enter min 3 characters title").isLength({ min: 3 }),
        body('content', "Enter a min 5 characters content.").isLength({ min: 5 })
    ],
    async(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            
            const { title, content, check} = req.body

            const task = await Task.create({
                title,
                content,
                check,
                owner: req.user.id
            })
            if(!task) return res.status(400).json({message: "Failed to create Task"})

            res.status(200).json({success: "Task created successfully", data: task})

        } catch (error) {
            return res.status(500).json({error: "Internel Server Error", message: error.message})
        }
    }
);

//Router to update tasks
router.put("/updatetask/:id", verifyUser,
    async(req,res)=>{

        try {
            const { id } = req.params
            const {check} = req.body

            const findTask = await Task.findById(id)
            if(!findTask) return res.status(400).json({message: "Failed to find Task"})

            if (findTask.owner.toString() !== req.user.id) {
                return res.status(401).json("You are not Allowed"); 
            } 

            const task = await Task.findByIdAndUpdate(id,{
               $set: {
                check
               } 
            }, {new: true})

            if(!task) return res.status(400).json({message: "Failed to update Task"})

            res.status(200).json({success: "Task updated successfully", data: task})

        } catch (error) {
            return res.status(500).json({error: "Internel Server Error", message: error.message})
        }
    }
);

//Router to delete Tasks
router.delete("/deletetask/:id", verifyUser ,async(req,res)=>{
    try {
        const {id} = req.params
    
        const task = await Task.findById(id)
        if(!task) return res.status(400).json({message: "failed to find task"})
    
        const deleteTask = await Task.findByIdAndDelete(id)
        if(!deleteTask) return res.status(400).json({message: "failed to Delete task"})    
    
        res.status(200).json({success: "Task deleted Successfully", data: deleteTask})    
    } catch (error) {
        return res.status(500).json({error: "Internel Server Error", message: error.message})
    }
});

router.get("/getalltask", verifyUser, async(req,res)=>{
    const tasks = await Task.find({owner: req.user.id})
    if(!tasks) return res.status(400).json({message: "Fail to fetch tasks"})

    res.status(200).json({success: "Tasks fetched successfully", data: tasks})
})

export default router