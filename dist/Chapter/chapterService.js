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
const createChapterIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield chapterSchema_1.default.insertMany(payload);
    return result;
});
const createSubChapterIntoDB = (payload, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { chapterName: { $regex: payload.chapterName }, 'subChapterNames.subChapterName': { $regex: payload.subChapterName } };
    const result = yield chapterSchema_1.default.find(query);
    console.log(result);
    if (result.length > 0) {
        res.status(400).json({ message: "This chapter and sub chapter is already added" });
    }
    else {
        const queryChapter = { chapterName: payload.chapterName };
        // const contentData = {subChapterName : payload.subChapterName, startPage : payload.startPage,  endPage : payload.endPage }
        const updateDoc = {
            $push: {
                subChapterNames: { subChapterName: payload.subChapterName, subChapterTitle: payload.subChapterTitle, startPage: payload.startPage, endPage: payload.endPage }
            }
        };
        const result = yield chapterSchema_1.default.updateOne(queryChapter, updateDoc);
        return result;
    }
});
const getChapterFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield chapterSchema_1.default.find();
    return result;
});
exports.chapterService = { createChapterIntoDB, getChapterFromDB, createSubChapterIntoDB };
