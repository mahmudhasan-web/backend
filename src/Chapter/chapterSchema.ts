import mongoose from "mongoose";


const chapterSchema = new mongoose.Schema({
    chapterName: String,
    subChapterName: Array,
    startPage: Number,
    endPage: Number,

})

export default mongoose.model('Chapter', chapterSchema);
