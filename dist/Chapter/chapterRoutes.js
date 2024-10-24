"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chapterRoute = void 0;
const express_1 = require("express");
const validation_1 = __importDefault(require("../middleware/validation"));
const chapterValidation_1 = require("./chapterValidation");
const chapterControl_1 = require("./chapterControl");
const route = (0, express_1.Router)();
route.post('/create', (0, validation_1.default)(chapterValidation_1.chapterValidation.chapterValidationSchema), chapterControl_1.chapterControl.createChapter);
route.post('/create/subchapter', (0, validation_1.default)(chapterValidation_1.chapterValidation.chapterValidationSchema), chapterControl_1.chapterControl.createSubChapter);
route.get('/', chapterControl_1.chapterControl.getChapter);
exports.chapterRoute = route;
