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
Object.defineProperty(exports, "__esModule", { value: true });
exports.chapterControl = void 0;
const chapterService_1 = require("./chapterService");
const createChapter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield chapterService_1.chapterService.createChapterIntoDB(req.body);
    res.status(200).json(result);
});
const createSubChapter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield chapterService_1.chapterService.createSubChapterIntoDB(req.body, res);
    res.status(200).json(result);
});
const getChapter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield chapterService_1.chapterService.getChapterFromDB();
    res.status(200).json(result);
});
exports.chapterControl = { createChapter, getChapter, createSubChapter };
