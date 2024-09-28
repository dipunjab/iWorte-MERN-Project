import 'dotenv/config'
import connectDB from './dataBase.js';

import express from "express"
import cors from "cors"

//Conecting to mongodb
connectDB().catch(err => console.log(err))

//Express app
const app = express()

//CORS
app.use(cors())

//midlleWare
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//Routes
import userRouter from "./routes/user.routes.js"
import noteRouter from "./routes/note.routes.js"
import taskRouter from "./routes/task.routes.js"
import stickyNoteRouter from "./routes/task.routes.js"

app.use("/api/auth", userRouter)
app.use("/api/note", noteRouter)
app.use("/api/task", taskRouter)
app.use("/api/stickynote", stickyNoteRouter)



app.listen(process.env.PORT, () => {
    console.log(`iWrote Backend listening on Port`)
})