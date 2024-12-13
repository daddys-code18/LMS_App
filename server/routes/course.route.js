import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  createCourse,
  //   createLecture,
  editCourse,
  //   editLecture,
  //   getCourseById,
  //   getCourseLecture,
  getCreatorCourses,
  //   getLectureById,
  //   getPublishedCourse,
  //   removeLecture,
  //   searchCourse,
  //   togglePublishCourse,
} from "../controllers/course.controller.js";
import upload from "../utlis/multer.js";
const router = express.Router();

router.route("/").post(isAuthenticated, createCourse);
router.route("/").get(isAuthenticated, getCreatorCourses);
router
  .route("/:courseId")
  .put(isAuthenticated, upload.single("courseThumbnail"), editCourse);

export default router;
