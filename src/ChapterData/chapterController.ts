import { Request, Response } from "express"
import chapterSchema from "./chapterSchema"
import { chapterService } from "./chapterService"

const createChapter = async (req: Request, res: Response) => {
    const body = req?.body
    const result = await chapterService.createChapterIntoDB(body)
     res.status(201).json(result)

}


const getChapter = async(req: Request, res: Response)=>{
    console.log(req.params.id);
    
    const result = await  chapterService.getChapterFromDB()
    res.status(200).json(result)

}


export const chapterController = { createChapter, getChapter }