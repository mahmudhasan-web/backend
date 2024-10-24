import { array } from "zod";
import chapterDataSchema from "./chapterDataSchema"

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
    const result = await chapterDataSchema.findOne().and(query)
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

        const result = await chapterDataSchema.updateOne({ subChapterName: payload.subChapterName }, updateDoc)
        console.log(result);

        return result

    }
    else {
        const chapter = await chapterDataSchema.insertMany(payload)
        return chapter
    }

}

const getChapterFromDB = async () => {
    const chapter = await chapterDataSchema.find()
    return chapter
}

// const updateChapterIntoDB = async (payload: any) => {

//     const query = {$and : {chapterName : payload.chapterName}, {}}

// }


export const chapterDataService = { createChapterIntoDB, getChapterFromDB }