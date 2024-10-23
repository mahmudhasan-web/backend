import express, { Application } from 'express'
import chapterSchema from './chapterSchema'
import { chapterController } from './chapterController'
import validateRequest from '../middleware/validation'
import { chapterValidation } from './chapterValidation'
const router = express.Router()


router.get("/", chapterController.getChapter)

router.post("/create",
    validateRequest(chapterValidation.chapterValidationSchema),
    chapterController.createChapter
)


export const chapterRoute = router
