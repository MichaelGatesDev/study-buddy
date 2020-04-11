import { Router } from "express";
import usersRoute from "./users/";
import schoolsRoute from "./schools/";
import authRoute from "./auth";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/users", usersRoute);
router.use("/schools", schoolsRoute);
router.use("/auth", authRoute);

// Export the base-router
export default router;
