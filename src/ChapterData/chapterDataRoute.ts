import express, { Application } from 'express'
import chapterDataSchema from './chapterDataSchema'
import { chapterController } from './chapterDataController'
import validateRequest from '../middleware/validation'
import { chapterDataValidation } from './chapterDataValidation'
const router = express.Router()


router.get("/", chapterController.getChapterData)

router.post("/create",
    validateRequest(chapterDataValidation.chapterDataValidationSchema),
    chapterController.createChapterData
)


export const chapterDataRoute = router
