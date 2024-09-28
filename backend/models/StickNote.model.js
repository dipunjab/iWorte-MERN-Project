import mongoose from "mongoose";
import { Schema } from "mongoose";


const stickyNoteSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
},{timestamps: true});


const StickyNote = mongoose.model("StickyNote", stickyNoteSchema)
export default StickyNote