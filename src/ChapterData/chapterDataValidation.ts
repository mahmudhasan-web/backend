import z from 'zod'

const chapterDataValidationSchema = z.object({
    chapterName: z.string(),
    subChapterName: z.string(),
    contentsObject: z.array(
        z.object({
            page: z.number(),
            content: z.string()
        })
    )
})


export const chapterDataValidation = { chapterDataValidationSchema }