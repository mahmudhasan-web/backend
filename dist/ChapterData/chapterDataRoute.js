"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chapterDataRoute = void 0;
const express_1 = __importDefault(require("express"));
const chapterDataController_1 = require("./chapterDataController");
const validation_1 = __importDefault(require("../middleware/validation"));
const chapterDataValidation_1 = require("./chapterDataValidation");
const router = express_1.default.Router();
router.get("/", chapterDataController_1.chapterController.getChapterData);
router.post("/create", (0, validation_1.default)(chapterDataValidation_1.chapterDataValidation.chapterDataValidationSchema), chapterDataController_1.chapterController.createChapterData);
exports.chapterDataRoute = router;
