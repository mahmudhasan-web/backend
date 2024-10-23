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
exports.chapterController = void 0;
const chapterService_1 = require("./chapterService");
const createChapter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req === null || req === void 0 ? void 0 : req.body;
    const result = yield chapterService_1.chapterService.createChapterIntoDB(body);
    res.status(201).json(result);
});
const getChapter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    const result = yield chapterService_1.chapterService.getChapterFromDB();
    res.status(200).json(result);
});
exports.chapterController = { createChapter, getChapter };
