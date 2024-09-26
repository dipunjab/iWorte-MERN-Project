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


app.get('/',(req,res)=>{
    res.send("iWrote")
})


app.listen(process.env.PORT, () => {
    console.log(`iWrote Backend listening on Port`)
})