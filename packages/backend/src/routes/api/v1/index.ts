import { Router } from "express";
import usersRoute from "./users";
import coursesRoute from "./courses/";
import schoolsRoute from "./schools";
import authRoute from "./auth";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/auth", authRoute);
router.use("/courses", coursesRoute);
router.use("/schools", schoolsRoute);
router.use("/users", usersRoute);

// Export the base-router
export default router;
