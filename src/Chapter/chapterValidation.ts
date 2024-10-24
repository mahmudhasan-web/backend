import z, { string } from "zod";

const subChapterNamesSchema = z.object({
    subChapterName: z.string().optional(),
    subChapterTitle: z.string().optional(),
    startPage: z.string().optional(),
    endPage: z.string().optional(),
});


const chapterValidationSchema = z.object({
    chapterName: z.string(),
    subChapterNames: z.array(subChapterNamesSchema).optional(),
    startPage: z.number().optional(),
    endPage: z.number().optional(),
})


export const chapterValidation = { chapterValidationSchema }