"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chapterRoute_1 = require("../ChapterData/chapterRoute");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/chapter",
        route: chapterRoute_1.chapterRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
