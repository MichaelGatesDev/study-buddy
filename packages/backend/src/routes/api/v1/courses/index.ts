import { Router } from "express";

import Course from "../../../../db/models/course";
import School from "../../../../db/models/school";

import allRoute from "./all";
import singleRoute from "./single";
import addRoute from "./add";

// Init router and path
const router = Router();

router.param("courseID", async function (req, res, next, id) {
  try {
    const course = await Course.findOne({
      where: { id },
      include: [School],
    });
    if (course === null) {
      next(new Error("No course exists with ID " + id));
      return;
    }
    req.body.course = course;
    next();
  } catch (error) {
    next(new Error(error.parent.sqlMessage));
  }
});

router.use("/", allRoute);
router.use("/:courseID", singleRoute);
router.use("/add", addRoute);

// Export the base-router
export default router;
