import chapterSchema from "./chapterSchema"



const createChapterIntoDB = async (payload: any) => {
    const result = await chapterSchema.insertMany(payload)
    return result
}


export const chapterService = { createChapterIntoDB }