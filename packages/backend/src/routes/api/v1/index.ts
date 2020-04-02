import { Router } from "express";
import usersRoute from "./users/";
import schoolsRoute from "./schools/";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/users", usersRoute);
router.use("/schools", schoolsRoute);

// Export the base-router
export default router;
