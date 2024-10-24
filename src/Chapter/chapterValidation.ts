import { z } from "zod";


const chapterValidationSchema = z.object({
    chapterName: z.string(),
    subChapterName: z.array(z.string()).optional(),
    startPage: z.number().optional(),
    endPage: z.number().optional(),
})


export const chapterValidation = {chapterValidationSchema}