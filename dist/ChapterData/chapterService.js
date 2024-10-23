"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chapterService = void 0;
const chapterSchema_1 = __importDefault(require("./chapterSchema"));
// interface IChapter {
//     chapterName: String,
//     subChapterName: String,
//     contentsObject: [
//         {
//             page: Number,
//             content: String
//         }
//     ]
// }
const createChapterIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const chapter = yield chapterSchema_1.default.insertMany(payload);
    return chapter;
});
const getChapterFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const chapter = yield chapterSchema_1.default.find();
    return chapter;
});
const updateChapterIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.chapterService = { createChapterIntoDB, getChapterFromDB };
