import { Router } from "express";

import addRoute from "./add";
import allRoute from "./all";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/", allRoute);
router.use("/add", addRoute);

// Export the base-router
export default router;
