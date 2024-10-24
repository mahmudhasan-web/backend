import { Request, Response } from "express"
import { chapterDataService } from "./chapterDataService"

const createChapterData = async (req: Request, res: Response) => {
    const body = req?.body
    const result = await chapterDataService.createChapterIntoDB(body)
     res.status(201).json(result)

}


const getChapterData = async(req: Request, res: Response)=>{
    console.log(req.params.id);
    
    const result = await  chapterDataService.getChapterFromDB()
    res.status(200).json(result)

}


export const chapterController = { createChapterData, getChapterData }