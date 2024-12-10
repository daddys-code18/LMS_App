import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  createCourse,
  //   createLecture,
  //   editCourse,
  //   editLecture,
  //   getCourseById,
  //   getCourseLecture,
  //   getCreatorCourses,
  //   getLectureById,
  //   getPublishedCourse,
  //   removeLecture,
  //   searchCourse,
  //   togglePublishCourse,
} from "../controllers/course.controller.js";
const router = express.Router();

router.route("/").post(isAuthenticated, createCourse);
export default router;
