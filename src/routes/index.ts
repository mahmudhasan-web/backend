import { Router } from "express";
import { chapterDataRoute } from "../ChapterData/chapterDataRoute";
import { chapterRoute } from "../Chapter/chapterRoutes";

const router = Router();
const moduleRoutes = [
  {
    path: "/chapterData",
    route: chapterDataRoute,
  },
  
  {
    path: "/chapter",
    route: chapterRoute,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;