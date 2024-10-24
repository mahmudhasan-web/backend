import { Router } from "express";
import validateRequest from "../middleware/validation";
import { chapterValidation } from "./chapterValidation";
import { chapterControl } from "./chapterControl";

const route = Router()

route.post('/create',
    validateRequest(chapterValidation.chapterValidationSchema),
    chapterControl.createChapter
)

route.post('/create/subchapter',
    validateRequest(chapterValidation.chapterValidationSchema),
    chapterControl.createSubChapter
)

route.get('/', chapterControl.getChapter)


export const chapterRoute = route;
