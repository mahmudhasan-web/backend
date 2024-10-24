import mongoose from "mongoose";


const chapterSchema = new mongoose.Schema({
    chapterName: String,
    subChapterNames: Array,
    startPage: Number,
    endPage: Number,

})

export default mongoose.model('Chapter', chapterSchema);
