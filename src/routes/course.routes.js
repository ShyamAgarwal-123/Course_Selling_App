import { Router } from "express";
import {
  createCourse,
  getAdminCourses,
  getAllCourses,
  getCourse,
  togglePublish,
  updateCourse,
  uploadCourseThumbnail,
} from "../controllers/course.controllers.js";
import Auth from "../middlewares/auth.middlewares.js";
import upload from "../middlewares/multer.middlewares.js";
const courseRouter = Router();

courseRouter.route("/allCourses").get(getAllCourses);
courseRouter.use(Auth);
courseRouter.route("/createCourse").post(createCourse);
courseRouter.route("/getAdminCourses").get(getAdminCourses);
courseRouter.route("/getCourse/:courseId").get(getCourse);
courseRouter.route("/updateCourse/:courseId").put(updateCourse);
courseRouter.route("/togglePublish/:courseId").put(togglePublish);
courseRouter
  .route("/uploadThumbnail/:courseId")
  .put(upload.single("file"), uploadCourseThumbnail);

export default courseRouter;
