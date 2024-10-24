import { Response } from "express"
import chapterSchema from "./chapterSchema"



const createChapterIntoDB = async (payload: any) => {
    const result = await chapterSchema.insertMany(payload)
    return result
}

const createSubChapterIntoDB = async (payload: any, res: Response) => {

    const query = { chapterName: { $regex: payload.chapterName }, 'subChapterNames.subChapterName': { $regex: payload.subChapterName } }
    const result = await chapterSchema.find(query)
    console.log(result);

    if (result.length > 0) {
        res.status(400).json({ message: "This chapter and sub chapter is already added" })
    }
    else {

        const queryChapter = { chapterName: payload.chapterName }
        // const contentData = {subChapterName : payload.subChapterName, startPage : payload.startPage,  endPage : payload.endPage }

        const updateDoc = {
            $push: {
                subChapterNames: {subChapterName : payload.subChapterName, subChapterTitle : payload.subChapterTitle, startPage : payload.startPage,  endPage : payload.endPage }
            }
        }
        const result = await chapterSchema.updateOne(queryChapter, updateDoc)
        return result
    }
}


const getChapterFromDB = async () => {
    const result = await chapterSchema.find()
    return result
}

export const chapterService = { createChapterIntoDB, getChapterFromDB, createSubChapterIntoDB }