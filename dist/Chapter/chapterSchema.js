"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const chapterSchema = new mongoose_1.default.Schema({
    chapterName: String,
    subChapterNames: Array,
    startPage: Number,
    endPage: Number,
});
exports.default = mongoose_1.default.model('Chapter', chapterSchema);
