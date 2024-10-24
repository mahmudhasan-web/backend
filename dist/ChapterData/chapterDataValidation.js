"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chapterDataValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const chapterDataValidationSchema = zod_1.default.object({
    chapterName: zod_1.default.string(),
    subChapterName: zod_1.default.string(),
    contentsObject: zod_1.default.array(zod_1.default.object({
        page: zod_1.default.number(),
        content: zod_1.default.string()
    }))
});
exports.chapterDataValidation = { chapterDataValidationSchema };
