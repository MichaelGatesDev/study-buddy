import { Router } from "express";

import School from "../../../../db/models/school";
import User from "../../../../db/models/user";
import Course from "../../../../db/models/course";

import allRoute from "./all";
import singleRoute from "./single";
import addRoute from "./add";

// Init router and path
const router = Router();

router.param("schoolID", async function (req, res, next, id) {
  try {
    const school = await School.findOne({
      where: { id },
      include: [User, Course],
    });
    if (school === null) {
      next(new Error("No school exists with ID " + id));
      return;
    }
    req.body.school = school;
    next();
  } catch (error) {
    next(new Error(error.parent.sqlMessage));
  }
});

router.use("/", allRoute);
router.use("/:schoolID", singleRoute);
router.use("/add", addRoute);

// Export the base-router
export default router;
