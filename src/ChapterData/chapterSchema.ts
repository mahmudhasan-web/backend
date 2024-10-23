import mongoose, { model } from "mongoose";

const chapterSchema = new mongoose.Schema({
    chapterName: String,
    subChapterName: String,
    contentsObject: [
        {
            page: Number,
            content: String
        }
    ]
})

export default mongoose.model('chapterSchema', chapterSchema) 