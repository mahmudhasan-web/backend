"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chapterValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const subChapterNamesSchema = zod_1.default.object({
    subChapterName: zod_1.default.string().optional(),
    subChapterTitle: zod_1.default.string().optional(),
    startPage: zod_1.default.string().optional(),
    endPage: zod_1.default.string().optional(),
});
const chapterValidationSchema = zod_1.default.object({
    chapterName: zod_1.default.string(),
    subChapterNames: zod_1.default.array(subChapterNamesSchema).optional(),
    startPage: zod_1.default.number().optional(),
    endPage: zod_1.default.number().optional(),
});
exports.chapterValidation = { chapterValidationSchema };
