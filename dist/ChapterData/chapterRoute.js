"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chapterRoute = void 0;
const express_1 = __importDefault(require("express"));
const chapterController_1 = require("./chapterController");
const validation_1 = __importDefault(require("../middleware/validation"));
const chapterValidation_1 = require("./chapterValidation");
const router = express_1.default.Router();
router.get("/", chapterController_1.chapterController.getChapter);
router.post("/create", (0, validation_1.default)(chapterValidation_1.chapterValidation.chapterValidationSchema), chapterController_1.chapterController.createChapter);
exports.chapterRoute = router;
