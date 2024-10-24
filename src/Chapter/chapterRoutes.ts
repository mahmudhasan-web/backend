import { Router } from "express";
import validateRequest from "../middleware/validation";
import { chapterValidation } from "./chapterValidation";
import { chapterControl } from "./chapterControl";

const route = Router()

route.post('/create-chapter',
    validateRequest(chapterValidation.chapterValidationSchema),
    chapterControl.createChapter
)


export const  chapterRoute = route;
