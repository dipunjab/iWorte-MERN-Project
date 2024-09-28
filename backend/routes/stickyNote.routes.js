import express from "express"
import StickyNote from "../models/StickNote.model.js"
import { body, validationResult } from "express-validator"
import verifyUser from "../middleware/auth.middleware.js";


const router = express.Router()


export default router