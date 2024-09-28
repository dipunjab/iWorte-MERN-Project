import mongoose from "mongoose";
import { Schema } from "mongoose";


const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},{timestamps: true});


const Note = mongoose.model("Note", noteSchema)
export default Note