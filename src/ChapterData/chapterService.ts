import { array } from "zod";
import chapterSchema from "./chapterSchema"

// interface IChapter {
//     chapterName: String,
//     subChapterName: String,
//     contentsObject: [
//         {
//             page: Number,
//             content: String
//         }
//     ]
// }


const createChapterIntoDB = async (payload: any) => {

    const query: any = { chapterName: payload.chapterName, subChapterName: payload.subChapterName }
    const result = await chapterSchema.findOne().and(query)
    console.log(result);
    const updateArray = payload.contentsObject

    console.log(updateArray);


    if (result) {
        const updateDoc = {

            $push: {
                contentsObject: {
                    $each: updateArray,

                },
            }
        }

        const result = await chapterSchema.updateOne({ subChapterName: payload.subChapterName }, updateDoc)
        console.log(result);

        return result

    }
    else {
        const chapter = await chapterSchema.insertMany(payload)
        return chapter
    }

}

const getChapterFromDB = async () => {
    const chapter = await chapterSchema.find()
    return chapter
}

// const updateChapterIntoDB = async (payload: any) => {

//     const query = {$and : {chapterName : payload.chapterName}, {}}

// }


export const chapterService = { createChapterIntoDB, getChapterFromDB }