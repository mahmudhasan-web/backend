import { Router } from "express";
import { chapterRoute } from "../ChapterData/chapterRoute";

const router = Router();
const moduleRoutes = [
  {
    path: "/chapter",
    route: chapterRoute,
  },
  
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;