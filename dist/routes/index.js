"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chapterDataRoute_1 = require("../ChapterData/chapterDataRoute");
const chapterRoutes_1 = require("../Chapter/chapterRoutes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/chapterData",
        route: chapterDataRoute_1.chapterDataRoute,
    },
    {
        path: "/chapter",
        route: chapterRoutes_1.chapterRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
