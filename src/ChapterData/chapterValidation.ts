import z from 'zod'

const chapterValidationSchema = z.object({
    chapterName: z.string(),
    subChapterName: z.string(),
    contentsObject: z.array(
        z.object({
            page: z.number(),
            content: z.string()
        })
    )
})


export const chapterValidation = { chapterValidationSchema }