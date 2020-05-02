import { Router } from "express";

import User from "../../../../db/models/user";
import School from "../../../../db/models/school";

import allRoute from "./all";
import singleRoute from "./single";
import addRoute from "./add";

// Init router and path
const router = Router();

router.param("userID", async function (req, res, next, id) {
  try {
    const user = await User.findOne({
      where: { id },
      include: [School],
    });
    if (user === null) {
      next(new Error("No user exists with ID " + id));
    }
    req.body.user = user;
    next();
  } catch (error) {
    next(new Error(error.parent.sqlMessage));
  }
});

router.use("/", allRoute);
router.use("/:userID", singleRoute);
router.use("/add", addRoute);

// Export the base-router
export default router;
